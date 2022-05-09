import React from "react";

export const CalculatorInitial = () => {
  //warning: if you typing along, this will be refactored to userReducer
  const [mainCalculatorState, setMainCalculatorState] = React.useState(0);
  const [otherCalculatorState, setOtherCalculatorState] = React.useState("");
  //can be: c(clear), +, -, *, /, =
  const [currentOperator, setCurrentOperator] = React.useState("");

  const onSymbolClicked = (number) => {};

  const onOperatorClicked = (operator) => {};

  const onClearClicked = () => {};

  return (
    <div>
      <section className="calculator-header">
        <div>
          <span className="main-calculator-state">0</span>
          <span className="current-operator">+</span>
        </div>

        <div className="other-calculator-state">4</div>
      </section>
      <hr className="simple-hr" />
      <section className="calculator-grid">
        {/* first row */}
        <button className="calc-btn operator-btn">c</button>
        <button className="calc-btn operator-btn">/</button>
        <button className="calc-btn operator-btn">*</button>
        <button className="calc-btn operator-btn">-</button>
        {/* second row */}
        <button className="calc-btn symbol-btn">7</button>
        <button className="calc-btn symbol-btn">8</button>
        <button className="calc-btn symbol-btn">9</button>
        <button className="calc-btn operator-btn calc-btn-tall">+</button>
        {/* third row */}
        <button className="calc-btn symbol-btn">4</button>
        <button className="calc-btn symbol-btn">5</button>
        <button className="calc-btn symbol-btn">6</button>
        {/* fourth row */}
        <button className="calc-btn symbol-btn">1</button>
        <button className="calc-btn symbol-btn">2</button>
        <button className="calc-btn symbol-btn">3</button>
        {/* fifth row */}
        <button className="calc-btn operator-btn calc-btn-tall">=</button>
        <button className="calc-btn symbol-btn calc-btn-wide">0</button>
        <button className="calc-btn symbol-btn">.</button>
      </section>
    </div>
  );
};
