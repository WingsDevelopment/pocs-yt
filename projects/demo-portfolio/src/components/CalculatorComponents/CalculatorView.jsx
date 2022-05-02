import React from "react";
import { ClearButton } from "../Buttons/ClearButton";
import { OperatorButton } from "../Buttons/OperatorButton";
import { SymbolComponent } from "../Buttons/SymbolButton";

export const CalculatorView = ({
  onOperatorClicked,
  onSymbolClicked,
  onClearClicked,
  mainCalculatorState,
  otherCalculatorState,
  currentOperator,
}) => {
  return (
    <div>
      <section className="calculator-header">
        {(currentOperator || !otherCalculatorState) && (
          <p>{mainCalculatorState}</p>
        )}
        {currentOperator && <p>{currentOperator}</p>}
        <p>{otherCalculatorState}</p>
      </section>
      <hr className="simple-hr" />
      <section className="calculator-grid">
        <ClearButton onClearClickedFn={onClearClicked} operator="c" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="/" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="*" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="-" />
        <SymbolComponent content="7" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="8" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="9" onSymbolClickedFn={onSymbolClicked} />
        <OperatorButton
          additionalClass={"calc-btn-tall"}
          onOperatorClickedFn={onOperatorClicked}
          operator="+"
        />
        <SymbolComponent content="4" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="5" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="6" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="1" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="2" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="3" onSymbolClickedFn={onSymbolClicked} />
        <OperatorButton
          additionalClass={"calc-btn-tall"}
          onOperatorClickedFn={onOperatorClicked}
          operator="="
        />
        <SymbolComponent
          additionalClass={"calc-btn-wide"}
          content="0"
          onSymbolClickedFn={onSymbolClicked}
        />
        <SymbolComponent content="." onSymbolClickedFn={onSymbolClicked} />
      </section>
    </div>
  );
};
