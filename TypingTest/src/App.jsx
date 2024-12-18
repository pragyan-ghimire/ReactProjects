import React, { useEffect, useState } from "react";
import "./App.css";
import TypingAreaComponent from "./components/TypingAreaComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [disable, setDisable] = useState(false);
  const [time, setTime] = useState(0);
  const [totalCharacterCount, setTotalCharacterCount] = useState(0);
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
      setTotalCharacterCount(text.length);
      setDisable(true);
      setIsTyping(false);
    }
  }

  //for checking character
  function handleCharCheck(errCharCount) {
    setErrorCharacterCount(errCharCount);
  }

  //Reset function
  function resetToDefault(){
    setIsTyping(false);
    setDisable(false);
    setText("");
    setTime(0);
    setTotalCharacterCount(0);
    setErrorCharacterCount(0);
  }

  return (
    <>
      <div className="h-screen">
        {/* {
          disable ? 
          <ResultComponent 
          totalCharacterCount = {totalCharacterCount}
          errorCharacterCount = {errorCharacterCount}
          /> : 
          <TypingAreaComponent
          onChange={handleChange}
          onCharCheck={handleCharCheck}
          text={text}
          disable={disable}
          time={time}
        />
        } */}
        <TypingAreaComponent
          onChange={handleChange}
          onCharCheck={handleCharCheck}
          text={text}
          disable={disable}
          time={time}
        />
        <ResultComponent 
          totalCharacterCount = {totalCharacterCount}
          errorCharacterCount = {errorCharacterCount}
          /> 
      </div>
    </>
  );
}

export default App;
