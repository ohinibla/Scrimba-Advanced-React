import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const STARTING_TIME = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(event) {
    setText(event.target.value);
  }

  function countTextWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((item) => item !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    setText("");
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(countTextWords(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1 * 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  console.log(isTimeRunning);

  return (
    <main>
      <h1>How fast do you type?</h1>
      <br />
      <textarea
        onChange={handleChange}
        id="text"
        name="text"
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        START
      </button>
      <h1>Word count: {wordCount}</h1>
    </main>
  );
}
