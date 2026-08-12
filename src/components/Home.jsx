// BiharDarogaMockTest.jsx
import React, { useState, useEffect } from "react";

const allQuestions = [
  {
    id: 1,
    question: "What is the capital of Bihar?",
    options: ["Patna", "Ranchi", "Lucknow", "Kolkata"],
    answer: "Patna",
  },
  {
    id: 2,
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Nehru", "Patel"],
    answer: "Dr. B.R. Ambedkar",
  },
  {
    id: 3,
    question: "5 + 7 = ?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    id: 5,
    question: "भारत का राष्ट्रीय पशु कौन है?",
    options: ["शेर", "हाथी", "बाघ", "चीता"],
    answer: "बाघ",
  },
];

export default function BiharDarogaMockTest() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600);

  const [questions] = useState(
    [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5)
  );

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (started && !submitted && timer > 0) {
      const t = setInterval(() => setTimer((p) => p - 1), 1000);
      return () => clearInterval(t);
    }
  }, [started, submitted, timer]);

  const startExam = () => {
    if (name && code === "BDVIVEK") setStarted(true);
    else alert("Invalid Code");
  };

  const submitExam = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    setScore(s);
    setSubmitted(true);
  };

  if (!started) {
    return (
      <div>
        <h1>Bihar Daroga Mock Test</h1>
        <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Code" onChange={(e)=>setCode(e.target.value)} />
        <button onClick={startExam}>Start</button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div>
        <h1>Result</h1>
        <h2>{score}/{questions.length}</h2>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div>
      <h2>Time Left: {Math.floor(timer/60)}:{String(timer%60).padStart(2,"0")}</h2>
      <h3>{q.question}</h3>

      {q.options.map((op)=>(
        <div key={op}>
          <input
            type="radio"
            checked={answers[current]===op}
            onChange={()=>setAnswers({...answers,[current]:op})}
          />
          {op}
        </div>
      ))}

      <button onClick={()=>setCurrent(Math.max(0,current-1))}>Previous</button>
      <button onClick={()=>setCurrent(Math.min(questions.length-1,current+1))}>Next</button>
      <button onClick={submitExam}>Submit</button>
    </div>
  );
}
