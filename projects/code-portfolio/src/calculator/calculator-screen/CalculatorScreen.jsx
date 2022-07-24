import React from "react";

import "./CalculatorScreen.css";

export const CalculatorScreen = ({
  mainCalculatorState,
  currentOperator,
  otherCalculatorState,
}) => {
  return (
    <>
      <section className="calculator-header">
        <div>
          <span className="text">{mainCalculatorState}</span>
          {currentOperator && <span className="text">{currentOperator}</span>}
        </div>

        <div className="text">{otherCalculatorState}</div>
      </section>
      <hr className="simple-hr" />
    </>
  );
};
