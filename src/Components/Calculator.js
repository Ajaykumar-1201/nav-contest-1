import { useState } from "react";
import React from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [color, setColor] = useState("");

  //validation
  function validate(e) {
    if (!num1 || !num2) {
      setMessage("Num 1 or Num 2 Cannot Be Empty");
      return false;
    } else if (isNaN(num1) || isNaN(num2)) {
      setMessage("Num 1 or Num 2 is Not A Number");
      return false;
    } else if (e.target.textContent === "/" && parseFloat(num2) === 0) {
      setMessage("Cannot divide by zero");
      return false;
    } else {
      return true;
    }
  }
  function handleButton(e) {
    
    if (validate(e)) {
      let operator = e.target.textContent;
      setError("Success!");
      setColor("green");
      calculator(operator);
    } else {
      setColor("red");
      setError("Error!");
    }
  }

  //Calculating Result

  function calculator(operator) {
    let res;
    if (operator === "+") {
      res = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
      res = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "*") {
      res = parseFloat(num1) * parseFloat(num2);
    } else {
      res = parseFloat(num1) / parseFloat(num2);
    }
    // Round to 4 decimal places
    res = parseFloat(res.toFixed(4));
    setMessage("Result =  " + res);
  }

  return (
    <div className="main">
      <div className="calculator">
        <p className="heading">React Calculator</p>
        <input
          type="text"
          value={num1}
          placeholder="Num 1"
          onChange={(e) => {
            setNum1(e.target.value);
            setError("");
            setMessage("");
          }}
        ></input>
        <input
          type="text"
          value={num2}
          placeholder="Num 2"
          onChange={(e) => {
            setNum2(e.target.value);
            setError("");
            setMessage("");
          }}
        ></input>
        <div className="buttons">
          <button onClick={handleButton}>+</button>
          <button onClick={handleButton}>-</button>
          <button onClick={handleButton}>*</button>
          <button onClick={handleButton}>/</button>
        </div>
        <div className="result">
          <p className="error" style={{ color: `${color}` }}>
            {error}
          </p>
          <p className="message"> {message}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
