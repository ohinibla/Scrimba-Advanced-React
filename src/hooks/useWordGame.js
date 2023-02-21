import { useState, useEffect, useRef } from "react";

export default function useWordGame(startingTime = 10) {
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textAreaRef = useRef(null);

  function textChange(e) {
    setText(e.target.value);
  }

  function calculateWords(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((item) => item !== "").length;
  }

  function startGame() {
    setTimeRemaining(startingTime);
    setText("");
    setIsTimeRunning(true);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWords(text));
  }

  useEffect(() => {
    console.log(`is useEffect`);
    if (isTimeRunning && timeRemaining > 0) {
      console.log(`in if clause`);
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1 * 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textAreaRef,
    text,
    textChange,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}
