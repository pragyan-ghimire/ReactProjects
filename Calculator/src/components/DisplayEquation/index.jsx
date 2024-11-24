import React from "react";
import "./styles.css";
const DisplayEquation = (props) => {

  

  return (
    <div className="displayEqn">
      {props.operation === "=" ? (
        <h2>{props.answer}</h2>
      ) : ( props.operation === "AC"? null :
        <h2>
          {props.fNum} {props.operation} {props.sNum}
        </h2>
      )}
    </div>
  );
};

export default DisplayEquation;
