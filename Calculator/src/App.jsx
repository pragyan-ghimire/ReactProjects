import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayEquation from "./components/DisplayEquation";
import NormalButtons from "./components/NormalButtons";
import SpecialButtons from "./components/SpecialButtons";

function App() {
  const normalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialBtn = ["DEL", "AC", "X", "/", "+", "-", "="];
  const [fNum, setFNum] = useState(null);
  const [sNum, setSNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [num, setNum] = useState([]);
  const [isFirstOperand, setIsFirstOperand] = useState(true);

  function handleOperation(operator) {
    switch (operator) {
      case "+":
        setAnswer(fNum + sNum);
        break;
      case "-":
        setAnswer(fNum - sNum);
        break;
      case "X":
        setAnswer(fNum * sNum);
        break;
      case "/":
        setAnswer(fNum / sNum);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    if (sNum !== null && operation) {
      // console.log("Props updated, performing calculation...");
      handleOperation(operation);
    }
  }, [operation, sNum]);

  //logic: Enter number until a operational button is clicked
  //After first opBtn appears, num is set to empty for second number
  function handleNumClick(number) {
    let cpyNum = [...num];
    if (!specialBtn.includes(number)) {
      cpyNum.push(number);
      setNum(cpyNum);
    } else {
      setIsFirstOperand(false);
      setNum([0]);
    }
    if (isFirstOperand) {
      let n = parseInt(cpyNum.join(""));
      setFNum(n);
    } else {
      let n = parseInt(cpyNum.join(""));
      setSNum(n);
    }
  }
 
  function handleOperationClick(btn) {
    if (btn === "AC") {
      setFNum(null);
      setSNum(null);
      setNum([]);
      setIsFirstOperand(true);
      setOperation(null);
      setAnswer(null);
    } else {
      if (answer !== null) {
        setFNum(answer);
        setSNum(null);
        setAnswer(null);
        setNum([]);
        setIsFirstOperand(false);
        setOperation(null);
      } else {
        setOperation(btn);
      }
    }
  }

  return (
    <>
      <div className="container">
        <DisplayEquation
          fNum={fNum}
          sNum={sNum}
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
                <div
                  key={index}
                  onClick={() => {
                    handleNumClick(btn);
                    handleOperationClick(btn);
                  }}
                >
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
