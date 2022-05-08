import React from "react";
import { ClearButton } from "../buttons/ClearButton";
import { OperatorButton } from "../buttons/OperatorButton";
import { SymbolComponent } from "../buttons/SymbolButton";

export const CalculatorView = ({
  onClearClicked,
  onOperatorClicked,
  onSymbolClicked,
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
        {/* first row */}
        <ClearButton onClearClickedFn={onClearClicked} operator="c" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="/" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="*" />
        <OperatorButton onOperatorClickedFn={onOperatorClicked} operator="-" />
        {/* second row */}
        <SymbolComponent content="7" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="8" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="9" onSymbolClickedFn={onSymbolClicked} />
        <OperatorButton
          additionalClass={"calc-btn-tall"}
          onOperatorClickedFn={onOperatorClicked}
          operator="+"
        />
        {/* third row */}
        <SymbolComponent content="4" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="5" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="6" onSymbolClickedFn={onSymbolClicked} />
        {/* fourth row */}
        <SymbolComponent content="1" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="2" onSymbolClickedFn={onSymbolClicked} />
        <SymbolComponent content="3" onSymbolClickedFn={onSymbolClicked} />
        {/* fifth row */}
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
