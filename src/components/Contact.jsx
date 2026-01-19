import React, { useState, useEffect } from 'react';

const TraditionalLudo = () => {
  // Game constants
  const PLAYERS = [
    { id: 1, name: 'Red', color: '#FF0000', homePosition: 0, startCell: 0, path: [], isAI: false },
    { id: 2, name: 'Green', color: '#00FF00', homePosition: 1, startCell: 13, path: [], isAI: false },
    { id: 3, name: 'Yellow', color: '#FFFF00', homePosition: 2, startCell: 26, path: [], isAI: false },
    { id: 4, name: 'Blue', color: '#0000FF', homePosition: 3, startCell: 39, path: [], isAI: false },
  ];

  // Game states
  const [players, setPlayers] = useState(() => 
    PLAYERS.map(player => ({
      ...player,
      tokens: Array(4).fill().map(() => ({ 
        position: -1, // -1 means in home, 0-51 means on board, 100+ means in finish path
        steps: 0,
        isFinished: false
      })),
      hasTurn: player.id === 1,
      isActive: true
    }))
  );
  
  const [diceValue, setDiceValue] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [gameStatus, setGameStatus] = useState('Red player starts. Roll the dice!');
  const [moveHistory, setMoveHistory] = useState([]);
  const [moveQueue, setMoveQueue] = useState([]);
  const [canRoll, setCanRoll] = useState(true);
  const [gameBoard, setGameBoard] = useState(Array(52).fill(null));

  // Initialize paths for each player
  useEffect(() => {
    const initializePaths = () => {
      // Create the circular path (52 cells)
      const updatedPlayers = players.map(player => {
        const path = [];
        for (let i = 0; i < 52; i++) {
          path.push((player.startCell + i) % 52);
        }
        // Add finish path (6 cells)
        for (let i = 0; i < 6; i++) {
          path.push(100 + player.id * 10 + i); // Unique finish path IDs
        }
        return { ...player, path };
      });
      setPlayers(updatedPlayers);
      updateBoard(updatedPlayers);
    };

    initializePaths();
  }, []);

  // Update board with token positions
  const updateBoard = (playerList) => {
    const newBoard = Array(52).fill(null);
    
    playerList.forEach(player => {
      player.tokens.forEach((token, tokenIndex) => {
        if (token.position >= 0 && token.position < 52) {
          if (!newBoard[token.position]) {
            newBoard[token.position] = [];
          }
          newBoard[token.position].push({
            playerId: player.id,
            playerColor: player.color,
            tokenIndex: tokenIndex
          });
        }
      });
    });
    
    setGameBoard(newBoard);
  };

  // Roll dice function
  const rollDice = () => {
    if (!canRoll || isRolling) return;
    
    setIsRolling(true);
    setCanRoll(false);
    
    // Dice roll animation
    let rolls = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;
      
      if (rolls >= maxRolls) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        setIsRolling(false);
        
        // Save to history
        const currentPlayer = players.find(p => p.hasTurn);
        setMoveHistory(prev => [...prev, {
          player: currentPlayer.name,
          dice: finalValue,
          action: 'rolled'
        }]);
        
        // Process the dice roll
        processDiceRoll(finalValue);
      }
    }, 100);
  };

  // Process dice roll and make automatic move
  const processDiceRoll = (value) => {
    const currentPlayerIndex = players.findIndex(p => p.hasTurn);
    const currentPlayer = players[currentPlayerIndex];
    
    // Find movable tokens
    const movableTokens = currentPlayer.tokens
      .map((token, index) => ({ ...token, index }))
      .filter(token => !token.isFinished && canTokenMove(currentPlayer, token, value));
    
    if (movableTokens.length === 0) {
      // No valid moves, switch turn
      setGameStatus(`${currentPlayer.name} has no valid moves. Switching turn...`);
      setTimeout(() => switchTurn(currentPlayerIndex), 1500);
      return;
    }
    
    // Automatically select the best token to move
    const selectedToken = selectBestToken(currentPlayer, movableTokens, value);
    
    if (selectedToken) {
      // Queue the move
      setMoveQueue([{
        playerIndex: currentPlayerIndex,
        tokenIndex: selectedToken.index,
        diceValue: value
      }]);
      
      setGameStatus(`${currentPlayer.name} will move token ${selectedToken.index + 1}`);
      
      // Execute move after a short delay
      setTimeout(() => executeMove(currentPlayerIndex, selectedToken.index, value), 1000);
    }
  };

  // Check if token can move
  const canTokenMove = (player, token, diceValue) => {
    if (token.isFinished) return false;
    
    if (token.position === -1) {
      // Token is in home
      return diceValue === 6;
    } else if (token.position >= 100) {
      // Token is in finish path
      const finishPathIndex = token.position - 100 - player.id * 10;
      return finishPathIndex + diceValue < 6;
    } else {
      // Token is on main board
      const currentIndex = player.path.findIndex(cell => cell === token.position);
      return currentIndex + diceValue < player.path.length;
    }
  };

  // Select best token to move (simple AI)
  const selectBestToken = (player, tokens, diceValue) => {
    // Prioritize tokens that can capture opponents
    for (const token of tokens) {
      if (token.position !== -1 && token.position < 100) {
        const newPosition = calculateNewPosition(player, token, diceValue);
        if (newPosition < 52 && canCapture(player, token, newPosition)) {
          return token;
        }
      }
    }
    
    // Prioritize moving tokens out of home
    for (const token of tokens) {
      if (token.position === -1) {
        return token;
      }
    }
    
    // Prioritize tokens close to finish
    for (const token of tokens) {
      if (token.position >= 100) {
        return token;
      }
    }
    
    // Otherwise, move the first available token
    return tokens[0];
  };

  // Calculate new position
  const calculateNewPosition = (player, token, diceValue) => {
    if (token.position === -1) {
      // Moving out of home
      return player.path[0]; // First step on the path
    } else if (token.position >= 100) {
      // Moving in finish path
      const finishPathIndex = token.position - 100 - player.id * 10;
      return 100 + player.id * 10 + (finishPathIndex + diceValue);
    } else {
      // Moving on main board
      const currentIndex = player.path.findIndex(cell => cell === token.position);
      return player.path[currentIndex + diceValue];
    }
  };

  // Check if move can capture opponent
  const canCapture = (player, token, newPosition) => {
    if (newPosition >= 52) return false; // Can't capture in finish path
    
    // Check safe cells (where captures can't happen)
    const safeCells = [0, 8, 13, 21, 26, 34, 39, 47, 52];
    if (safeCells.includes(newPosition % 52)) return false;
    
    // Check if opponent's token is at new position
    return gameBoard[newPosition]?.some(cell => cell.playerId !== player.id);
  };

  // Execute the move
  const executeMove = (playerIndex, tokenIndex, diceValue) => {
    const updatedPlayers = [...players];
    const player = updatedPlayers[playerIndex];
    const token = player.tokens[tokenIndex];
    
    // Calculate new position
    const newPosition = calculateNewPosition(player, token, diceValue);
    const oldPosition = token.position;
    
    // Check for capture
    if (newPosition < 52) {
      const capturedTokens = gameBoard[newPosition]?.filter(cell => cell.playerId !== player.id) || [];
      
      capturedTokens.forEach(captured => {
        const capturedPlayer = updatedPlayers[captured.playerId - 1];
        capturedPlayer.tokens[captured.tokenIndex].position = -1; // Send back to home
        capturedPlayer.tokens[captured.tokenIndex].steps = 0;
        
        // Log capture
        setMoveHistory(prev => [...prev, {
          player: player.name,
          dice: diceValue,
          action: `captured ${capturedPlayer.name}'s token`
        }]);
      });
    }
    
    // Update token position
    token.position = newPosition;
    token.steps += diceValue;
    
    // Check if token reached finish
    if (newPosition >= 100 && newPosition < 100 + player.id * 10 + 6) {
      const finishIndex = newPosition - 100 - player.id * 10;
      if (finishIndex === 5) {
        token.isFinished = true;
        setGameStatus(`${player.name}'s token reached the finish!`);
        
        // Check if player won
        if (player.tokens.every(t => t.isFinished)) {
          setGameStatus(`${player.name} WINS THE GAME! 🎉`);
          setCanRoll(false);
          return;
        }
      }
    }
    
    // Update board
    updateBoard(updatedPlayers);
    
    // Log move
    setMoveHistory(prev => [...prev, {
      player: player.name,
      dice: diceValue,
      action: `moved token ${tokenIndex + 1} from ${oldPosition === -1 ? 'home' : `cell ${oldPosition}`} to ${newPosition < 52 ? `cell ${newPosition}` : 'finish path'}`
    }]);
    
    // Check for another turn (if dice was 6)
    if (diceValue === 6 && !token.isFinished) {
      setGameStatus(`${player.name} rolled a 6! Gets another turn.`);
      setCanRoll(true);
    } else {
      // Switch to next player
      switchTurn(playerIndex);
    }
    
    // Clear move queue
    setMoveQueue([]);
  };

  // Switch to next player
  const switchTurn = (currentPlayerIndex) => {
    const updatedPlayers = [...players];
    
    // Reset current player's turn
    updatedPlayers[currentPlayerIndex].hasTurn = false;
    
    // Find next active player
    let nextIndex = (currentPlayerIndex + 1) % players.length;
    let attempts = 0;
    
    while (attempts < players.length) {
      if (updatedPlayers[nextIndex].isActive) {
        updatedPlayers[nextIndex].hasTurn = true;
        setPlayers(updatedPlayers);
        setGameStatus(`${updatedPlayers[nextIndex].name}'s turn. Roll the dice!`);
        setCanRoll(true);
        setDiceValue(0);
        return;
      }
      nextIndex = (nextIndex + 1) % players.length;
      attempts++;
    }
  };

  // Render game board
  const renderBoard = () => {
    return (
      <div className="board">
        {/* Main board cells */}
        {Array(15).fill().map((_, row) => (
          <div key={row} className="board-row">
            {Array(15).fill().map((_, col) => {
              const cellIndex = row * 15 + col;
              return renderBoardCell(row, col, cellIndex);
            })}
          </div>
        ))}
        
        {/* Render tokens on board */}
        {players.map(player => (
          player.tokens.map((token, tokenIndex) => {
            if (token.position >= 0 && token.position < 52) {
              const position = getBoardPosition(token.position, player.id);
              return (
                <div
                  key={`${player.id}-${tokenIndex}`}
                  className="token"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    backgroundColor: player.color,
                    border: `2px solid ${player.color === '#FFFF00' ? '#000' : '#fff'}`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                  }}
                >
                  {tokenIndex + 1}
                </div>
              );
            }
            return null;
          })
        ))}
        
        {/* Render home tokens */}
        {players.map(player => (
          <div key={`home-${player.id}`} className={`home-area home-${player.id}`}>
            {player.tokens.map((token, tokenIndex) => {
              if (token.position === -1) {
                return (
                  <div
                    key={`${player.id}-home-${tokenIndex}`}
                    className="home-token"
                    style={{
                      backgroundColor: player.color,
                      border: `2px solid ${player.color === '#FFFF00' ? '#000' : '#fff'}`
                    }}
                  >
                    {tokenIndex + 1}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
        
        {/* Render finish areas */}
        {players.map(player => (
          <div key={`finish-${player.id}`} className={`finish-area finish-${player.id}`}>
            {player.tokens.map((token, tokenIndex) => {
              if (token.position >= 100) {
                const finishIndex = token.position - 100 - player.id * 10;
                return (
                  <div
                    key={`${player.id}-finish-${tokenIndex}`}
                    className="finish-token"
                    style={{
                      backgroundColor: player.color,
                      border: `2px solid ${player.color === '#FFFF00' ? '#000' : '#fff'}`,
                      gridColumn: finishIndex + 1
                    }}
                  >
                    {tokenIndex + 1}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    );
  };

  // Get board position for token
  const getBoardPosition = (cellIndex, playerId) => {
    // Simplified mapping for demo - in real implementation, this would map each cell to specific coordinates
    const pathPositions = [
      // Red path positions (clockwise)
      { x: 50, y: 93 }, { x: 43, y: 93 }, { x: 36, y: 93 }, { x: 29, y: 93 }, { x: 22, y: 93 }, { x: 15, y: 93 },
      { x: 7, y: 85 }, { x: 7, y: 78 }, { x: 7, y: 71 }, { x: 7, y: 64 }, { x: 7, y: 57 }, { x: 7, y: 50 },
      { x: 15, y: 7 }, { x: 22, y: 7 }, { x: 29, y: 7 }, { x: 36, y: 7 }, { x: 43, y: 7 }, { x: 50, y: 7 },
      { x: 57, y: 7 }, { x: 64, y: 7 }, { x: 71, y: 7 }, { x: 78, y: 7 }, { x: 85, y: 7 }, { x: 93, y: 7 },
      { x: 93, y: 15 }, { x: 93, y: 22 }, { x: 93, y: 29 }, { x: 93, y: 36 }, { x: 93, y: 43 }, { x: 93, y: 50 },
      { x: 93, y: 57 }, { x: 93, y: 64 }, { x: 93, y: 71 }, { x: 93, y: 78 }, { x: 93, y: 85 }, { x: 93, y: 93 },
      { x: 85, y: 93 }, { x: 78, y: 93 }, { x: 71, y: 93 }, { x: 64, y: 93 }, { x: 57, y: 93 }, { x: 50, y: 93 },
      { x: 50, y: 85 }, { x: 50, y: 78 }, { x: 50, y: 71 }, { x: 50, y: 64 }, { x: 50, y: 57 }, { x: 50, y: 50 },
      { x: 57, y: 50 }, { x: 64, y: 50 }, { x: 71, y: 50 }, { x: 78, y: 50 }, { x: 85, y: 50 }
    ];
    
    // Adjust based on player's starting position
    const adjustedIndex = (cellIndex + playerId * 13) % 52;
    return pathPositions[adjustedIndex] || { x: 50, y: 50 };
  };

  // Render individual board cell
  const renderBoardCell = (row, col, cellIndex) => {
    let cellClass = 'cell';
    let cellStyle = {};
    
    // Determine cell type based on position
    if (
      (row === 0 || row === 14 || col === 0 || col === 14) ||
      (row === 1 && col > 5 && col < 9) ||
      (row === 13 && col > 5 && col < 9) ||
      (col === 1 && row > 5 && row < 9) ||
      (col === 13 && row > 5 && row < 9)
    ) {
      cellClass += ' path-cell';
    }
    
    // Color the starting cells
    if (row === 13 && col === 7) {
      cellStyle.backgroundColor = '#FF0000'; // Red start
    } else if (row === 1 && col === 7) {
      cellStyle.backgroundColor = '#00FF00'; // Green start
    } else if (row === 7 && col === 1) {
      cellStyle.backgroundColor = '#FFFF00'; // Yellow start
    } else if (row === 7 && col === 13) {
      cellStyle.backgroundColor = '#0000FF'; // Blue start
    }
    
    // Color the home areas
    if (row < 6 && col < 6) {
      cellStyle.backgroundColor = '#FFCCCC'; // Red home area
    } else if (row < 6 && col > 8) {
      cellStyle.backgroundColor = '#CCFFCC'; // Green home area
    } else if (row > 8 && col < 6) {
      cellStyle.backgroundColor = '#FFFFCC'; // Yellow home area
    } else if (row > 8 && col > 8) {
      cellStyle.backgroundColor = '#CCCCFF'; // Blue home area
    }
    
    // Center star
    if (row === 7 && col === 7) {
      cellClass += ' center-star';
      cellStyle.background = 'radial-gradient(circle, #fff 0%, #ccc 100%)';
    }
    
    // Safe cells
    const safeCells = [
      [0, 7], [7, 0], [14, 7], [7, 14],
      [1, 7], [7, 1], [13, 7], [7, 13],
      [6, 7], [7, 6], [8, 7], [7, 8]
    ];
    
    if (safeCells.some(([r, c]) => r === row && c === col)) {
      cellClass += ' safe-cell';
      cellStyle.border = '2px solid #000';
    }
    
    return (
      <div key={cellIndex} className={cellClass} style={cellStyle}>
        {/* Show tokens in this cell */}
        {gameBoard[cellIndex]?.map((token, idx) => (
          <div
            key={idx}
            className="cell-token"
            style={{
              backgroundColor: token.playerColor,
              border: `1px solid ${token.playerColor === '#FFFF00' ? '#000' : '#fff'}`
            }}
          />
        ))}
      </div>
    );
  };

  // Get current player
  const currentPlayer = players.find(p => p.hasTurn);

  return (
    <div className="ludo-game">
      <header className="game-header">
        <h1>🎲 Traditional Ludo Game</h1>
        <p className="subtitle">Classic Board Game with Auto-Movement</p>
      </header>

      <div className="game-container">
        {/* Left sidebar - Game info */}
        <div className="game-sidebar left">
          <div className="player-info">
            <h3>Players</h3>
            {players.map(player => (
              <div 
                key={player.id} 
                className={`player-card ${player.hasTurn ? 'active' : ''}`}
                style={{ borderColor: player.color }}
              >
                <div className="player-color" style={{ backgroundColor: player.color }}></div>
                <div className="player-details">
                  <span className="player-name">{player.name}</span>
                  <span className="player-status">
                    {player.hasTurn ? '🎲 Playing now' : 'Waiting...'}
                  </span>
                  <div className="player-tokens">
                    Tokens: {player.tokens.filter(t => !t.isFinished).length}/4 remaining
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="game-controls">
            <h3>Game Controls</h3>
            <div className="dice-container">
              <div className={`dice ${isRolling ? 'rolling' : ''}`}>
                <span className="dice-value">{diceValue || '?'}</span>
              </div>
              <button 
                className={`roll-button ${!canRoll ? 'disabled' : ''}`}
                onClick={rollDice}
                disabled={!canRoll || isRolling}
              >
                {isRolling ? 'Rolling...' : 'Roll Dice'}
              </button>
            </div>
            
            <div className="game-status">
              <h4>Status</h4>
              <p>{gameStatus}</p>
            </div>
          </div>
        </div>

        {/* Main game board */}
        <div className="main-board">
          {renderBoard()}
          
          {/* Display move queue */}
          {moveQueue.length > 0 && (
            <div className="move-queue">
              <h4>Next Move:</h4>
              {moveQueue.map((move, index) => (
                <div key={index} className="queued-move">
                  {players[move.playerIndex].name} will move token {move.tokenIndex + 1}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar - Game history */}
        <div className="game-sidebar right">
          <div className="game-history">
            <h3>Move History</h3>
            <div className="history-list">
              {moveHistory.slice().reverse().map((move, index) => (
                <div key={index} className="history-item">
                  <span className="history-player" style={{ 
                    color: PLAYERS.find(p => p.name === move.player)?.color || '#000'
                  }}>
                    {move.player}
                  </span>
                  <span className="history-dice">🎲 {move.dice}</span>
                  <span className="history-action">{move.action}</span>
                </div>
              ))}
              {moveHistory.length === 0 && (
                <div className="history-empty">No moves yet. Roll the dice to start!</div>
              )}
            </div>
          </div>

          <div className="game-instructions">
            <h3>How to Play</h3>
            <ul>
              <li>Click "Roll Dice" on your turn</li>
              <li>The game automatically moves your tokens</li>
              <li>Roll a 6 to get another turn</li>
              <li>Get all 4 tokens to the finish area to win</li>
              <li>Land on opponent's token to send it home</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .ludo-game {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        .game-header {
          text-align: center;
          color: white;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .game-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .game-container {
          display: flex;
          gap: 20px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .game-sidebar {
          width: 300px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .main-board {
          flex: 1;
          background: white;
          border-radius: 10px;
          padding: 20px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          min-height: 800px;
        }

        .board {
          width: 100%;
          height: 700px;
          position: relative;
          background: #f0f0f0;
          border: 3px solid #333;
          border-radius: 5px;
          overflow: hidden;
        }

        .board-row {
          display: flex;
          height: calc(100% / 15);
        }

        .cell {
          width: calc(100% / 15);
          height: 100%;
          border: 1px solid #ddd;
          position: relative;
        }

        .path-cell {
          background-color: #fff8e1;
        }

        .safe-cell {
          background-color: #e8f5e9 !important;
        }

        .center-star {
          background: radial-gradient(circle, #fff 0%, #ccc 100%);
          border: 3px solid #333;
        }

        .cell-token {
          width: 70%;
          height: 70%;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .home-area {
          position: absolute;
          width: 28%;
          height: 28%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 5px;
          padding: 10px;
        }

        .home-1 {
          top: 2%;
          left: 2%;
          background: #FFCCCC;
          border: 2px solid #FF0000;
        }

        .home-2 {
          top: 2%;
          right: 2%;
          background: #CCFFCC;
          border: 2px solid #00FF00;
        }

        .home-3 {
          bottom: 2%;
          left: 2%;
          background: #FFFFCC;
          border: 2px solid #FFFF00;
        }

        .home-4 {
          bottom: 2%;
          right: 2%;
          background: #CCCCFF;
          border: 2px solid #0000FF;
        }

        .home-token {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .finish-area {
          position: absolute;
          width: 20%;
          height: 20%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2px;
          padding: 5px;
        }

        .finish-1 {
          top: 50%;
          left: 2%;
          transform: translateY(-50%);
          background: rgba(255, 0, 0, 0.1);
          border: 2px dashed #FF0000;
        }

        .finish-2 {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 255, 0, 0.1);
          border: 2px dashed #00FF00;
        }

        .finish-3 {
          top: 50%;
          right: 2%;
          transform: translateY(-50%);
          background: rgba(255, 255, 0, 0.1);
          border: 2px dashed #FFFF00;
        }

        .finish-4 {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 255, 0.1);
          border: 2px dashed #0000FF;
        }

        .finish-token {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .token {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
        }

        .player-info {
          margin-bottom: 30px;
        }

        .player-card {
          display: flex;
          align-items: center;
          padding: 10px;
          margin: 10px 0;
          background: white;
          border-radius: 8px;
          border-left: 5px solid;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .player-card.active {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .player-color {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 10px;
          border: 2px solid white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .player-details {
          flex: 1;
        }

        .player-name {
          font-weight: bold;
          display: block;
        }

        .player-status {
          font-size: 0.9rem;
          color: #666;
        }

        .player-tokens {
          font-size: 0.8rem;
          color: #888;
          margin-top: 5px;
        }

        .game-controls {
          text-align: center;
        }

        .dice-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          margin: 20px 0;
        }

        .dice {
          width: 80px;
          height: 80px;
          background: white;
          border: 3px solid #333;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s;
        }

        .dice.rolling {
          animation: roll 0.5s ease-in-out infinite;
        }

        @keyframes roll {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .roll-button {
          padding: 12px 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .roll-button:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .roll-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .game-status {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          text-align: left;
        }

        .game-status h4 {
          margin-bottom: 10px;
          color: #333;
        }

        .game-status p {
          color: #666;
          line-height: 1.5;
        }

        .game-history {
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .history-list {
          flex: 1;
          overflow-y: auto;
          background: #f8f9fa;
          border-radius: 5px;
          padding: 10px;
          margin-top: 10px;
        }

        .history-item {
          padding: 8px;
          margin: 5px 0;
          background: white;
          border-radius: 4px;
          border-left: 3px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .history-player {
          font-weight: bold;
          min-width: 60px;
        }

        .history-dice {
          font-weight: bold;
          color: #333;
        }

        .history-action {
          flex: 1;
          text-align: right;
          color: #666;
          font-size: 0.85rem;
        }

        .history-empty {
          text-align: center;
          color: #999;
          padding: 20px;
          font-style: italic;
        }

        .game-instructions {
          margin-top: 30px;
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
        }

        .game-instructions h3 {
          margin-bottom: 10px;
          color: #333;
        }

        .game-instructions ul {
          padding-left: 20px;
          color: #666;
          line-height: 1.6;
        }

        .game-instructions li {
          margin-bottom: 8px;
        }

        .move-queue {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #4CAF50;
          max-width: 300px;
        }

        .move-queue h4 {
          margin-bottom: 10px;
          color: #333;
        }

        .queued-move {
          padding: 8px;
          background: #e8f5e9;
          border-radius: 4px;
          font-size: 0.9rem;
          color: #2e7d32;
        }

        @media (max-width: 1200px) {
          .game-container {
            flex-direction: column;
          }

          .game-sidebar {
            width: 100%;
          }

          .main-board {
            min-height: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default TraditionalLudo;
