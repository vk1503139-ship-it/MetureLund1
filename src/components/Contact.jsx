import React, { useState, useEffect } from 'react';

const LudoGame = () => {
  // Game states
  const [players, setPlayers] = useState([
    { id: 1, name: 'Black', color: '#000000', position: 0, tokens: [0, 0, 0, 0], isActive: true },
    { id: 2, name: 'Pink', color: '#FF69B4', position: 0, tokens: [0, 0, 0, 0], isActive: false },
    { id: 3, name: 'Purple', color: '#9370DB', position: 0, tokens: [0, 0, 0, 0], isActive: false },
    { id: 4, name: 'Gray', color: '#808080', position: 0, tokens: [0, 0, 0, 0], isActive: false },
    { id: 5, name: 'White', color: '#FFFFFF', position: 0, tokens: [0, 0, 0, 0], isActive: false },
  ]);
  
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [gameLog, setGameLog] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedToken, setSelectedToken] = useState(null);
  const [gameMessage, setGameMessage] = useState('Roll the dice to start! Black player begins.');

  // Board configuration
  const boardSize = 15;
  const totalCells = 56;
  const safeCells = [0, 8, 13, 21, 26, 34, 39, 47];
  const winningCells = {
    1: [52, 53, 54, 55, 56],
    2: [12, 11, 10, 9, 8],
    3: [22, 23, 24, 25, 26],
    4: [38, 37, 36, 35, 34],
    5: [48, 49, 50, 51, 52],
  };

  // Roll the dice
  const rollDice = () => {
    if (diceValue !== 0 && selectedToken === null) {
      setGameMessage(`You rolled ${diceValue}. Select a token to move!`);
      return;
    }
    
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll);
    
    // Save current state to history before making changes
    saveToHistory();
    
    const playerName = players[currentPlayer].name;
    setGameLog(prev => [...prev, `${playerName} rolled ${roll}`]);
    
    if (roll === 6) {
      setGameMessage(`${playerName} rolled a 6! You get another turn. Select a token to move or bring a new token out.`);
    } else {
      setGameMessage(`${playerName} rolled ${roll}. Select a token to move.`);
    }
  };

  // Save current game state to history (for undo)
  const saveToHistory = () => {
    const gameState = {
      players: players.map(player => ({
        ...player,
        tokens: [...player.tokens]
      })),
      currentPlayer,
      diceValue,
      selectedToken,
      gameLog: [...gameLog]
    };
    
    setHistory(prev => [...prev, gameState]);
  };

  // Undo the last move
  const undoMove = () => {
    if (history.length === 0) return;
    
    const lastState = history[history.length - 1];
    
    setPlayers(lastState.players.map(player => ({
      ...player,
      tokens: [...player.tokens]
    })));
    setCurrentPlayer(lastState.currentPlayer);
    setDiceValue(lastState.diceValue);
    setSelectedToken(lastState.selectedToken);
    setGameLog([...lastState.gameLog]);
    
    // Remove the last state from history
    setHistory(prev => prev.slice(0, prev.length - 1));
    
    const playerName = lastState.players[lastState.currentPlayer].name;
    setGameMessage(`Undo successful. ${playerName}'s turn.`);
  };

  // Select a token to move
  const selectToken = (playerIndex, tokenIndex) => {
    if (playerIndex !== currentPlayer) {
      setGameMessage("It's not your turn!");
      return;
    }
    
    if (diceValue === 0) {
      setGameMessage("Roll the dice first!");
      return;
    }
    
    setSelectedToken({ playerIndex, tokenIndex });
    setGameMessage(`Selected ${players[playerIndex].name}'s token ${tokenIndex + 1}. Click on the board to move.`);
  };

  // Move the selected token
  const moveToken = (cellIndex) => {
    if (selectedToken === null || diceValue === 0) {
      setGameMessage("Select a token first!");
      return;
    }
    
    const { playerIndex, tokenIndex } = selectedToken;
    const player = players[playerIndex];
    const currentPos = player.tokens[tokenIndex];
    
    // Check if token can be moved
    if (currentPos === 0 && diceValue !== 6) {
      setGameMessage("You need a 6 to bring a token out!");
      return;
    }
    
    // Calculate new position
    let newPos;
    if (currentPos === 0) {
      // Token is in home, moving to start
      newPos = 1;
    } else {
      newPos = currentPos + diceValue;
      
      // Check if token has completed the board
      if (newPos > totalCells) {
        setGameMessage("Move not possible - token would exceed board limit!");
        return;
      }
    }
    
    // Save to history before making changes
    saveToHistory();
    
    // Check if new position is occupied by opponent
    const updatedPlayers = [...players];
    let capturedToken = false;
    
    for (let i = 0; i < updatedPlayers.length; i++) {
      if (i !== playerIndex) {
        for (let j = 0; j < updatedPlayers[i].tokens.length; j++) {
          if (updatedPlayers[i].tokens[j] === newPos && !safeCells.includes(newPos)) {
            // Capture opponent's token (send back to home)
            updatedPlayers[i].tokens[j] = 0;
            capturedToken = true;
            setGameLog(prev => [...prev, `${player.name} captured ${updatedPlayers[i].name}'s token!`]);
          }
        }
      }
    }
    
    // Update player's token position
    updatedPlayers[playerIndex].tokens[tokenIndex] = newPos;
    
    // Check if player has won
    const isWinningCell = winningCells[player.id]?.includes(newPos);
    if (isWinningCell && newPos === winningCells[player.id][4]) {
      setGameLog(prev => [...prev, `${player.name}'s token reached the winning spot!`]);
    }
    
    setPlayers(updatedPlayers);
    
    // Reset selection and dice
    setSelectedToken(null);
    setDiceValue(0);
    
    // Move to next player if dice was not 6
    if (diceValue !== 6) {
      const nextPlayer = (currentPlayer + 1) % players.length;
      setCurrentPlayer(nextPlayer);
      
      // Update active status
      const updatedPlayersWithStatus = updatedPlayers.map((p, idx) => ({
        ...p,
        isActive: idx === nextPlayer
      }));
      setPlayers(updatedPlayersWithStatus);
      
      setGameMessage(`${updatedPlayersWithStatus[nextPlayer].name}'s turn. Roll the dice!`);
    } else {
      setGameMessage(`${player.name} rolled a 6! You get another turn.`);
    }
  };

  // Render the game board
  const renderBoard = () => {
    const board = [];
    
    // Create board cells
    for (let row = 0; row < boardSize; row++) {
      const rowCells = [];
      for (let col = 0; col < boardSize; col++) {
        const cellIndex = row * boardSize + col;
        
        // Determine cell type and color
        let cellClass = "board-cell";
        let cellStyle = {};
        let cellText = "";
        
        // Home areas
        if ((row < 6 && col < 6) || (row < 6 && col > 8) || 
            (row > 8 && col < 6) || (row > 8 && col > 8)) {
          cellClass += " home-area";
          
          // Color the home areas
          if (row < 6 && col < 6) cellStyle.backgroundColor = '#9370DB'; // Purple
          else if (row < 6 && col > 8) cellStyle.backgroundColor = '#FF69B4'; // Pink
          else if (row > 8 && col < 6) cellStyle.backgroundColor = '#000000'; // Black
          else if (row > 8 && col > 8) cellStyle.backgroundColor = '#808080'; // Gray
        }
        
        // Center safe area (white)
        if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
          cellClass += " center-area";
          if (row === 7 && col === 7) {
            cellStyle.backgroundColor = '#FFFFFF';
            cellStyle.border = '2px solid #000';
          }
        }
        
        // Main path cells
        const isMainPath = (
          (row === 0 && col >= 6 && col <= 8) || // Top
          (row === 14 && col >= 6 && col <= 8) || // Bottom
          (col === 0 && row >= 6 && row <= 8) || // Left
          (col === 14 && row >= 6 && row <= 8)   // Right
        );
        
        if (isMainPath) {
          cellClass += " main-path";
          
          // Color the starting positions
          if (row === 0 && col === 7) cellStyle.backgroundColor = '#9370DB'; // Purple start
          else if (row === 14 && col === 7) cellStyle.backgroundColor = '#FF69B4'; // Pink start
          else if (col === 0 && row === 7) cellStyle.backgroundColor = '#000000'; // Black start
          else if (col === 14 && row === 7) cellStyle.backgroundColor = '#808080'; // Gray start
        }
        
        // Check if any token is on this cell
        const tokensInCell = [];
        players.forEach((player, pIdx) => {
          player.tokens.forEach((tokenPos, tIdx) => {
            // Simple mapping of token position to board cell (simplified for demo)
            if (tokenPos > 0) {
              // This is a simplified mapping - in a real game, you'd have a proper mapping
              const mappedRow = 7;
              const mappedCol = 7 + tokenPos;
              if (row === mappedRow && col === (mappedCol % boardSize)) {
                tokensInCell.push({ player, pIdx, tIdx });
              }
            }
          });
        });
        
        rowCells.push(
          <div 
            key={cellIndex} 
            className={cellClass} 
            style={cellStyle}
            onClick={() => moveToken(cellIndex)}
          >
            {tokensInCell.length > 0 && (
              <div className="tokens-container">
                {tokensInCell.map((token, idx) => (
                  <div 
                    key={idx}
                    className="token" 
                    style={{ backgroundColor: token.player.color }}
                    title={`${token.player.name} - Token ${token.tIdx + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectToken(token.pIdx, token.tIdx);
                    }}
                  >
                    {token.tIdx + 1}
                  </div>
                ))}
              </div>
            )}
            {cellText}
          </div>
        );
      }
      
      board.push(
        <div key={row} className="board-row">
          {rowCells}
        </div>
      );
    }
    
    return board;
  };

  // Render player tokens in home
  const renderPlayerTokens = (player, playerIndex) => {
    return (
      <div className="player-home" key={playerIndex}>
        <h4 style={{ color: player.color }}>{player.name}</h4>
        <div className="tokens-in-home">
          {player.tokens.map((tokenPos, tokenIndex) => (
            <div 
              key={tokenIndex}
              className={`home-token ${tokenPos === 0 ? 'in-home' : 'on-board'} ${selectedToken?.playerIndex === playerIndex && selectedToken?.tokenIndex === tokenIndex ? 'selected' : ''}`}
              style={{ backgroundColor: player.color }}
              onClick={() => selectToken(playerIndex, tokenIndex)}
              title={`${player.name} - Token ${tokenIndex + 1} (${tokenPos === 0 ? 'In Home' : 'Position: ' + tokenPos})`}
            >
              {tokenIndex + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="ludo-container">
      <header className="game-header">
        <h1>Ludo Game</h1>
        <p className="game-subtitle">5 Players Edition (Black, Pink, Purple, Gray, White)</p>
      </header>
      
      <div className="game-info">
        <div className="current-player-info">
          <div className="current-player" style={{ backgroundColor: players[currentPlayer].color }}>
            {players[currentPlayer].name}'s Turn
          </div>
          <div className="dice-container">
            <div className="dice">
              {diceValue > 0 ? diceValue : '?'}
            </div>
            <button className="roll-btn" onClick={rollDice}>
              Roll Dice
            </button>
          </div>
          <div className="game-message">{gameMessage}</div>
        </div>
        
        <div className="controls">
          <button 
            className="undo-btn" 
            onClick={undoMove}
            disabled={history.length === 0}
          >
            Undo Move
          </button>
          <div className="history-count">
            History: {history.length} moves saved
          </div>
        </div>
      </div>
      
      <div className="game-area">
        <div className="board-container">
          {renderBoard()}
        </div>
        
        <div className="players-sidebar">
          <h3>Players & Tokens</h3>
          <div className="players-list">
            {players.map((player, index) => (
              <div 
                key={player.id} 
                className={`player-info ${player.isActive ? 'active' : ''}`}
                style={{ borderLeft: `5px solid ${player.color}` }}
              >
                <div className="player-header">
                  <span className="player-name" style={{ color: player.color }}>
                    {player.name}
                  </span>
                  {index === currentPlayer && <span className="current-turn">Current Turn</span>}
                </div>
                <div className="player-tokens">
                  {renderPlayerTokens(player, index)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="game-log">
        <h3>Game Log</h3>
        <div className="log-entries">
          {gameLog.slice().reverse().map((entry, index) => (
            <div key={index} className="log-entry">
              {entry}
            </div>
          ))}
          {gameLog.length === 0 && (
            <div className="log-entry">Game started. Roll the dice!</div>
          )}
        </div>
      </div>
      
      <div className="game-rules">
        <h3>How to Play</h3>
        <ul>
          <li>Click "Roll Dice" to roll the dice.</li>
          <li>If you roll a 6, you get another turn.</li>
          <li>Click on a token in your home area to select it, then click on a board cell to move.</li>
          <li>Tokens can only leave home when you roll a 6.</li>
          <li>Use the "Undo Move" button to undo your last move.</li>
          <li>The first player to get all tokens to the center wins!</li>
        </ul>
      </div>
      
      <style jsx="true">{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
          background-color: #f5f5f5;
        }
        
        .ludo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        
        .game-header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #eee;
        }
        
        .game-header h1 {
          color: #333;
          font-size: 2.5rem;
          margin-bottom: 5px;
        }
        
        .game-subtitle {
          color: #666;
          font-size: 1.2rem;
        }
        
        .game-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .current-player-info {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .current-player {
          padding: 10px 20px;
          border-radius: 50px;
          color: white;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          min-width: 150px;
          text-align: center;
        }
        
        .dice-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .dice {
          width: 60px;
          height: 60px;
          background-color: white;
          border: 3px solid #333;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }
        
        .roll-btn, .undo-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .roll-btn {
          background-color: #4CAF50;
          color: white;
        }
        
        .roll-btn:hover {
          background-color: #45a049;
        }
        
        .undo-btn {
          background-color: #f44336;
          color: white;
        }
        
        .undo-btn:hover:not(:disabled) {
          background-color: #d32f2f;
        }
        
        .undo-btn:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        
        .game-message {
          background-color: white;
          padding: 12px 20px;
          border-radius: 6px;
          border-left: 4px solid #2196F3;
          font-weight: bold;
          flex-grow: 1;
          min-width: 300px;
        }
        
        .controls {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        
        .history-count {
          font-size: 0.9rem;
          color: #666;
        }
        
        .game-area {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .board-container {
          flex: 3;
          background-color: #f0f0f0;
          padding: 10px;
          border-radius: 8px;
          border: 3px solid #333;
        }
        
        .board-row {
          display: flex;
        }
        
        .board-cell {
          width: 40px;
          height: 40px;
          border: 1px solid #ccc;
          position: relative;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .board-cell:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        
        .home-area {
          border: 2px dashed #aaa;
        }
        
        .center-area {
          background-color: #f9f9f9;
        }
        
        .main-path {
          background-color: #e8f4f8;
        }
        
        .tokens-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 2px;
        }
        
        .token {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: white;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        
        .players-sidebar {
          flex: 1;
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }
        
        .players-sidebar h3 {
          margin-bottom: 15px;
          color: #333;
          text-align: center;
        }
        
        .players-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .player-info {
          padding: 10px;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .player-info.active {
          box-shadow: 0 0 0 2px #4CAF50;
        }
        
        .player-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .player-name {
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .current-turn {
          background-color: #4CAF50;
          color: white;
          font-size: 0.8rem;
          padding: 2px 8px;
          border-radius: 10px;
        }
        
        .player-home {
          margin-top: 5px;
        }
        
        .player-home h4 {
          margin-bottom: 5px;
        }
        
        .tokens-in-home {
          display: flex;
          gap: 8px;
        }
        
        .home-token {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
          border: 2px solid transparent;
          color: white;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
        
        .home-token.in-home {
          border-color: rgba(0, 0, 0, 0.3);
        }
        
        .home-token.on-board {
          border-color: #4CAF50;
        }
        
        .home-token.selected {
          border-color: #2196F3;
          border-width: 3px;
          transform: scale(1.1);
        }
        
        .game-log {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid #ddd;
        }
        
        .game-log h3 {
          margin-bottom: 10px;
          color: #333;
        }
        
        .log-entries {
          max-height: 150px;
          overflow-y: auto;
          background-color: white;
          border-radius: 4px;
          padding: 10px;
          border: 1px solid #eee;
        }
        
        .log-entry {
          padding: 8px;
          border-bottom: 1px solid #eee;
          font-size: 0.9rem;
        }
        
        .log-entry:last-child {
          border-bottom: none;
        }
        
        .game-rules {
          background-color: #e8f4f8;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #2196F3;
        }
        
        .game-rules h3 {
          margin-bottom: 10px;
          color: #333;
        }
        
        .game-rules ul {
          padding-left: 20px;
        }
        
        .game-rules li {
          margin-bottom: 5px;
          color: #555;
        }
        
        @media (max-width: 992px) {
          .game-area {
            flex-direction: column;
          }
          
          .board-cell {
            width: 30px;
            height: 30px;
          }
          
          .token {
            width: 12px;
            height: 12px;
            font-size: 8px;
          }
        }
        
        @media (max-width: 768px) {
          .current-player-info {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .game-info {
            flex-direction: column;
            align-items: stretch;
            gap: 15px;
          }
          
          .controls {
            align-items: stretch;
          }
          
          .board-cell {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default LudoGame;
