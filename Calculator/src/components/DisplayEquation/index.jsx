import React from "react";
import "./styles.css";
const DisplayEquation = (props) => {

  

  return (
    <div className="displayEqn">
      {
        props.answer.length !== 0 && props.operation.length == 0 ? <h2>{props.answer}</h2>:<h2>{props.prevOperand} {props.operation} {props.nextOperand}</h2>
      }
      
    </div>
  );
};

export default DisplayEquation;
