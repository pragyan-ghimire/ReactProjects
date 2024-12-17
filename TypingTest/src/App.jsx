import React, { useEffect, useState } from "react";
import "./App.css";
import TypingAreaComponent from "./components/TypingAreaComponent";

function App() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [disable, setDisable] = useState(false);
  const [time, setTime] = useState(0);
  const [totalCharacterCount, settotalCharacterCount] = useState(0);
  const [errorCharacterCount, setErrorCharacterCount] = useState(0);

  // For timer
  useEffect(() => {
    let timerId;

    if (isTyping) {
      timerId = setInterval(updateTime, 1000);
    }
    return () => clearInterval(timerId);
  }, [isTyping, time]);

  // to handle text area
  function handleChange(e) {
    setText(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
    }
  }

  //for handling time
  function updateTime() {
    if (time < 30) {
      setTime((preVal) => preVal + 1);
    } else {
      settotalCharacterCount(text.length);
      setDisable(true);
      setIsTyping(false);
    }
  }

  //for checking character
  function handleCharCheck(errCharCount) {
    setErrorCharacterCount(errCharCount);
  }

  //Reset function

  return (
    <>
      <div className="h-screen">
        <TypingAreaComponent
          onChange={handleChange}
          onCharCheck={handleCharCheck}
          text={text}
          disable={disable}
          time={time}
        />
        <p>{totalCharacterCount}</p>
        <p>{errorCharacterCount}</p>
      </div>
    </>
  );
}

export default App;
