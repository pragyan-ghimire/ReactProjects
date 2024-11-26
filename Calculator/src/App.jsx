import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayEquation from "./components/DisplayEquation";
import NormalButtons from "./components/NormalButtons";
import SpecialButtons from "./components/SpecialButtons";

function App() {
  const normalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialBtn = ["DEL", "AC", "X", "/", "+", "-", "="];
  const [prevOperand, setPrevOperand] = useState("");
  const [nextOperand, setNextOperand] = useState("");
  const [operation, setOperation] = useState("");
  const [isEqualClicked, setIsEqualClicked] =useState(false);
  const [answer, setAnswer] = useState("");
  const [isNextOperand, setIsNextOperand] = useState(false);

  useEffect(()=>{
    if(nextOperand.length !== 0 && isEqualClicked){
      handleOperation(operation);
      setIsEqualClicked(false);
      setIsNextOperand(false);
      setNextOperand("");
      setOperation("");
    }
  },[nextOperand, operation,isEqualClicked]);
  function handleOperation(operator) {
    const firstOperand = parseInt(prevOperand);
    const secondOperand = parseInt(nextOperand);
    let result;
    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        setAnswer(result.toString())
        break;
      case "-":
        result = firstOperand - secondOperand;
        setAnswer(result.toString())
        break;
      case "X":
        result = firstOperand * secondOperand;
        setAnswer(result.toString())
        break;
      case "/":
        result = firstOperand / secondOperand;
        setAnswer(result.toString())
        break;

      default:
        break;
    }
  }
  function handleNumClick(number) {
    if (isNextOperand) {
      setNextOperand((prevVal) => {
        return prevVal + number;
      });
    } else {
      setPrevOperand((prevVal) => {
        return prevVal + number;
      });
    }
  }

  function handleOperatorClick(btn) {
    if(btn === "="){
      setIsEqualClicked(true);
    }else{
      if(answer.length !== 0){
        setPrevOperand(answer);
      }
      setOperation(btn);
      setIsNextOperand(true);
      // console.log("clicked");
    }
  }

  return (
    <>
      <div className="container">
        <DisplayEquation
          prevOperand={prevOperand}
          nextOperand={nextOperand}
          operation={operation}
          answer={answer}
        />
        <div className="btnElements">
          <div className="normalBtnElements">
            {normalNum.map((num, index) => {
              return (
                <div key={index} onClick={() => handleNumClick(num)}>
                  <NormalButtons number={num} />
                </div>
              );
            })}
          </div>
          <div className="specialBtnElements">
            {specialBtn.map((btn, index) => {
              return (
                <div key={index} onClick={() => handleOperatorClick(btn)}>
                  <SpecialButtons button={btn} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// TODO: Multiple digits and DEL operation
