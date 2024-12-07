import React, { useEffect, useState } from "react";
import './App.css'
import TypingAreaComponent from './components/TypingAreaComponent'

function App() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [disable, setDisable] = useState(false);
  const [time, setTime] = useState(0);

  // For timer
  useEffect(() => {
    let timerId;

    if (isTyping) {
      timerId = setInterval(updateTime, 1000);
    }
    return () => clearInterval(timerId);
  }, [isTyping, time]);

  function handleChange(e) {
    setText(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
    }
  }

  function updateTime() {
    if (time < 60) {
      setTime((preVal) => preVal+1);
    } else {
      setDisable(true);
      setIsTyping(false);
    }
  }
  return (
    <>
    <div className="h-screen">
      <TypingAreaComponent onChange={handleChange} text={text} disable={disable} time={time} />
    </div>
    </>
  )
}

export default App
