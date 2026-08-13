// BiharDarogaMockTest.jsx
import React, { useState, useEffect } from "react";

// --- Question Banks ---
const currentAffairs = [
  { question: "Who is the current Chief Minister of Bihar?", options: ["Nitish Kumar", "Tejashwi Yadav", "Lalu Yadav", "Jitan Ram Manjhi"], answer: "Nitish Kumar" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "Which country won the FIFA World Cup 2022?", options: ["Brazil", "Argentina", "France", "Germany"], answer: "Argentina" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Which state hosted the 2023 G20 Summit?", options: ["Maharashtra", "Delhi", "Karnataka", "Uttar Pradesh"], answer: "Delhi" },
  { question: "Who is the CEO of Tesla?", options: ["Elon Musk", "Jeff Bezos", "Tim Cook", "Mark Zuckerberg"], answer: "Elon Musk" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "What is the official currency of the United Kingdom?", options: ["Dollar", "Euro", "Pound Sterling", "Yen"], answer: "Pound Sterling" },
  { question: "Which Indian state has the highest population?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "Which country hosted the 2024 Summer Olympics?", options: ["France", "Japan", "Brazil", "USA"], answer: "France" },
  { question: "What is the name of India's first satellite?", options: ["Aryabhata", "Bhaskara", "Rohini", "INSAT"], answer: "Aryabhata" },
];

const scienceQuestions = [
  { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Heart", "Skin"], answer: "Skin" },
  { question: "What is the speed of light?", options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^10 m/s", "3×10^4 m/s"], answer: "3×10^8 m/s" },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen" },
  { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: "NaCl" },
  { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
  { question: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
  { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere" },
  { question: "What is the boiling point of water in Celsius?", options: ["90°C", "95°C", "100°C", "110°C"], answer: "100°C" },
  { question: "Which vitamin is produced by the human body in sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
];

const mathQuestions = [
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
];

const reasoningQuestions = [
  { question: "Find the odd one out: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "If 'APPLE' is coded as 'BQQMF', what is 'MANGO' coded as?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "Find the next number: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "Which word does not belong? Apple, Mango, Carrot, Banana", options: ["Apple", "Mango", "Carrot", "Banana"], answer: "Carrot" },
  { question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "If 2=5, 3=10, 4=17, then 5=?", options: ["22", "24", "26", "28"], answer: "26" },
];

const socialScienceQuestions = [
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
  { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar"], answer: "Dr. Rajendra Prasad" },
  { question: "Which is the largest state in India by area?", options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"], answer: "Rajasthan" },
  { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "Which city is known as the 'Pink City' of India?", options: ["Jaipur", "Delhi", "Mumbai", "Kolkata"], answer: "Jaipur" },
  { question: "Who led the Dandi March?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh"], answer: "Mahatma Gandhi" },
  { question: "Which is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Lal Bahadur Shastri"], answer: "Jawaharlal Nehru" },
  { question: "Which river is the longest in India?", options: ["Ganga", "Yamuna", "Godavari", "Krishna"], answer: "Ganga" },
];

const computerQuestions = [
  { question: "What is the full form of CPU?", options: ["Central Process Unit", "Central Processing Unit", "Computer Process Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
  { question: "What is the shortcut key for copy?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+C" },
  { question: "Which is the largest unit of data storage?", options: ["KB", "MB", "GB", "TB"], answer: "TB" },
  { question: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
];

// --- Helper: Get random questions from a category ---
const getRandomQuestions = (category, count) => {
  const shuffled = [...category].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (22 questions) ---
const buildQuestionPaper = () => {
  const paper = [
    ...getRandomQuestions(currentAffairs, 4),
    ...getRandomQuestions(scienceQuestions, 4),
    ...getRandomQuestions(mathQuestions, 4),
    ...getRandomQuestions(reasoningQuestions, 4),
    ...getRandomQuestions(socialScienceQuestions, 4),
    ...getRandomQuestions(computerQuestions, 2),
  ];
  return paper.sort(() => Math.random() - 0.5);
};

// --- Component ---
export default function BiharDarogaMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600);
  const [questions] = useState(buildQuestionPaper);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

  useEffect(() => {
    if (started && !submitted && timer > 0) {
      const t = setInterval(() => {
        setTimer((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (timer === 0 && started && !submitted) {
      submitExam();
    }
  }, [started, submitted, timer]);

  const startExam = () => {
    setStarted(true);
  };

  const submitExam = () => {
    let s = 0;
    const details = questions.map((q, i) => {
      const isCorrect = answers[i] === q.answer;
      if (isCorrect) s++;
      return {
        question: q.question,
        options: q.options,
        correctAnswer: q.answer,
        userAnswer: answers[i] || "Not Attempted",
        isCorrect: isCorrect,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  // Home Page
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          textAlign: "center",
          maxWidth: "500px",
          width: "90%"
        }}>
          <div style={{ fontSize: "60px", marginBottom: "10px" }}>📚</div>
          <h1 style={{ color: "#333", marginBottom: "10px", fontSize: "32px" }}>
            Bihar Daroga Mock Test
          </h1>
          <div style={{
            height: "4px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            margin: "20px auto",
            width: "80px"
          }}></div>
          <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
            Total Questions: <strong>22</strong>
          </p>
          <p style={{ fontSize: "16px", color: "#888", marginBottom: "5px" }}>
            ⏱️ Duration: <strong>60 Minutes</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#999", marginTop: "20px" }}>
            • All questions are compulsory<br />
            • Each question carries 1 mark<br />
            • No negative marking
          </p>
          <button
            onClick={startExam}
            style={{
              padding: "15px 50px",
              fontSize: "20px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "30px",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
            }}
          >
            🚀 Start Exam
          </button>
        </div>
      </div>
    );
  }

  // Result Page
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "30px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {/* Result Card */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "30px"
          }}>
            <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
              {isPassed ? "🎉 Congratulations!" : "📖 Keep Practicing!"}
            </h1>
            <div style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: isPassed ? "#d4edda" : "#f8d7da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px auto",
              fontSize: "40px"
            }}>
              {isPassed ? "✅" : "📝"}
            </div>
            <div style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>
              {score} <span style={{ fontSize: "24px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ fontSize: "20px", color: isPassed ? "#28a745" : "#dc3545", marginTop: "10px" }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>
          </div>

          {/* Answer History */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "15px", marginBottom: "20px" }}>
              📋 Answer Review
            </h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : "#fff5f5",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : "#fc8181"}`,
                  padding: "15px 20px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  transition: "all 0.3s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ margin: "0", fontSize: "16px", color: "#2d3748" }}>
                    Q{index + 1}. {item.question}
                  </h4>
                  <span style={{
                    fontSize: "20px"
                  }}>
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "20px" }}>
                  <p style={{ margin: "5px 0" }}>
                    <strong>Your Answer:</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "5px 0" }}>
                      <strong>Correct Answer:</strong>{" "}
                      <span style={{ color: "#48bb78" }}>{item.correctAnswer}</span>
                    </p>
                  )}
                  <details style={{ marginTop: "5px" }}>
                    <summary style={{ cursor: "pointer", color: "#4a5568", fontSize: "14px" }}>
                      📖 View all options
                    </summary>
                    <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                      {item.options.map((opt, idx) => (
                        <li key={idx} style={{
                          padding: "3px 0",
                          color: opt === item.correctAnswer ? "#48bb78" :
                                 opt === item.userAnswer && !item.isCorrect ? "#fc8181" : "#4a5568"
                        }}>
                          {opt === item.correctAnswer && "✔️ "}
                          {opt === item.userAnswer && !item.isCorrect && "✖️ "}
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() => {
                setStarted(false);
                setSubmitted(false);
                setAnswers({});
                setResultDetails([]);
                setTimer(3600);
                setShowTimerWarning(false);
              }}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
              }}
            >
              🔄 Take New Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fa",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <div>
            <h2 style={{ margin: "0", color: "#2d3748" }}>📝 Bihar Daroga Mock Test</h2>
            <p style={{ margin: "5px 0 0", color: "#718096", fontSize: "14px" }}>
              Question {current + 1} of {questions.length}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: timer < 60 ? "#fc8181" : "#2d3748"
            }}>
              ⏱️ {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
            </div>
            <div style={{ fontSize: "14px", color: "#718096" }}>
              Answered: {answeredCount}/{questions.length}
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "20px"
        }}>
          <h3 style={{
            fontSize: "20px",
            color: "#2d3748",
            marginBottom: "25px"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "10px" }}>
            {q.options.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "12px 15px",
                  margin: "8px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #4299e1" : "2px solid transparent",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center"
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
                onMouseEnter={(e) => {
                  if (!answers[current]) {
                    e.currentTarget.style.backgroundColor = "#edf2f7";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!answers[current]) {
                    e.currentTarget.style.backgroundColor = "#f7fafc";
                  }
                }}
              >
                <input
                  type="radio"
                  id={`q${current}-opt${idx}`}
                  name={`question-${current}`}
                  checked={answers[current] === op}
                  onChange={() => {}}
                  style={{ marginRight: "12px", width: "18px", height: "18px" }}
                />
                <label
                  htmlFor={`q${current}-opt${idx}`}
                  style={{
                    fontSize: "16px",
                    cursor: "pointer",
                    flex: 1,
                    margin: "0"
                  }}
                >
                  {op}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                padding: "12px 25px",
                backgroundColor: current === 0 ? "#e2e8f0" : "#4299e1",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "10px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "bold",
                transition: "all 0.2s"
              }}
            >
              ⬅ Previous
            </button>

            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "12px 25px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#4299e1",
                color: current === questions.length - 1 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "10px",
                cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
                fontWeight: "bold",
                transition: "all 0.2s"
              }}
            >
              Next ➡
            </button>
          </div>

          <button
            onClick={submitExam}
            style={{
              padding: "12px 35px",
              backgroundColor: "#48bb78",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.2s",
              boxShadow: "0 4px 6px rgba(72, 187, 120, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#38a169";
              e.target.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#48bb78";
              e.target.style.transform = "scale(1)";
            }}
          >
            📤 Submit Test
          </button>
        </div>

        {/* Question Navigator */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginTop: "20px"
        }}>
          <p style={{ margin: "0 0 10px 0", color: "#718096", fontSize: "14px", fontWeight: "bold" }}>
            Question Navigator
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px"
          }}>
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: answers[idx] ? "#48bb78" : 
                                   current === idx ? "#4299e1" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "3px solid #4299e1" : "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (!answers[idx] && idx !== current) {
                    e.target.style.backgroundColor = "#edf2f7";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!answers[idx] && idx !== current) {
                    e.target.style.backgroundColor = "#e2e8f0";
                  }
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div style={{
            display: "flex",
            gap: "20px",
            marginTop: "15px",
            fontSize: "14px",
            color: "#4a5568"
          }}>
            <span>🟢 Answered</span>
            <span>🔵 Current</span>
            <span>⚪ Unanswered</span>
          </div>
        </div>

        {/* Timer Warning */}
        {showTimerWarning && (
          <div style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#fc8181",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(252, 129, 129, 0.4)",
            animation: "pulse 1.5s ease-in-out infinite"
          }}>
            ⚠️ Less than 1 minute remaining!
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
