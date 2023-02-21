import React from "react";
import useWordGame from "./hooks/useWordGame";
import "./styles.css";

export default function App() {
  const { textAreaRef, text, textChange, isTimeRunning, timeRemaining, startGame, wordCount } =
    useWordGame();

  return (
    <main>
      <h1>How fast do you type?</h1>
      <br />
      <textarea
        ref={textAreaRef}
        name="text"
        value={text}
        onChange={textChange}
        disabled={!isTimeRunning}
      />
      <h2>Time remaining: {timeRemaining}</h2>
      <button onClick={startGame} disabled={isTimeRunning}>
        start
      </button>
      <h2>Word count: {wordCount}</h2>
    </main>
  );
}
