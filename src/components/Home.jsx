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

// --- Build the complete question paper (50 questions) ---
const buildQuestionPaper = () => {
  const paper = [
    ...getRandomQuestions(currentAffairs, 12),
    ...getRandomQuestions(scienceQuestions, 12),
    ...getRandomQuestions(mathQuestions, 6),
    ...getRandomQuestions(reasoningQuestions, 6),
    ...getRandomQuestions(socialScienceQuestions, 10),
    ...getRandomQuestions(computerQuestions, 4),
  ];
  return paper.sort(() => Math.random() - 0.5); // Shuffle overall
};

// --- Component ---
export default function BiharDarogaMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 1 hour

  const [questions] = useState(buildQuestionPaper);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (started && !submitted && timer > 0) {
      const t = setInterval(() => setTimer((p) => p - 1), 1000);
      return () => clearInterval(t);
    }
  }, [started, submitted, timer]);

  const startExam = () => {
    setStarted(true);
  };

  const submitExam = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    setScore(s);
    setSubmitted(true);
  };

  // Home Page (before starting)
  if (!started) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
        <h1>📚 Bihar Daroga Mock Test</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Total Questions: 50 <br />
          (12 Current Affairs, 12 Science, 6 Math, 6 Reasoning, 10 Social Science, 4 Computer)
        </p>
        <p style={{ fontSize: "16px", color: "#777" }}>Time: 60 Minutes</p>
        <button
          onClick={startExam}
          style={{
            padding: "12px 40px",
            fontSize: "20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Start Exam
        </button>
      </div>
    );
  }

  // Result Page (after submission)
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
        <h1>✅ Result</h1>
        <h2>
          {score} / {questions.length}
        </h2>
        <h3>Percentage: {percentage}%</h3>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          {percentage >= 60 ? "🎉 Congratulations! You passed." : "📖 Better luck next time. Keep practicing!"}
        </p>
      </div>
    );
  }

  // Exam Page
  const q = questions[current];

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Timer */}
      <h2 style={{ color: timer < 60 ? "red" : "#333" }}>
        ⏱️ Time Left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
      </h2>

      {/* Progress */}
      <p>
        Question {current + 1} of {questions.length}
      </p>

      {/* Question */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <h3>{q.question}</h3>

        {/* Options */}
        {q.options.map((op, idx) => (
          <div key={idx} style={{ margin: "10px 0" }}>
            <input
              type="radio"
              id={`q${current}-opt${idx}`}
              name={`question-${current}`}
              checked={answers[current] === op}
              onChange={() => setAnswers({ ...answers, [current]: op })}
            />
            <label htmlFor={`q${current}-opt${idx}`} style={{ marginLeft: "8px", fontSize: "16px" }}>
              {op}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          style={{
            padding: "10px 20px",
            backgroundColor: current === 0 ? "#ccc" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: current === 0 ? "not-allowed" : "pointer",
          }}
        >
          ⬅ Previous
        </button>

        <button
          onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
          disabled={current === questions.length - 1}
          style={{
            padding: "10px 20px",
            backgroundColor: current === questions.length - 1 ? "#ccc" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next ➡
        </button>

        <button
          onClick={submitExam}
          style={{
            padding: "10px 30px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          📤 Submit
        </button>
      </div>
    </div>
  );
}
