import React from "react";
import { CalculatorView } from "./CalculatorView";

export const CalculatorState = () => {
  //warning: if you typing along, this will be refactored to userReducer
  const [mainCalculatorState, setMainCalculatorState] = React.useState(0);
  const [otherCalculatorState, setOtherCalculatorState] = React.useState("");
  //can be: c(clear), +, -, *, /, =
  const [currentOperator, setCurrentOperator] = React.useState("");

  const onSymbolClicked = (symbol) => {
    if (otherCalculatorState.contains(".") && symbol === ".") return;
    setOtherCalculatorState(otherCalculatorState + symbol);
  };

  const onOperatorClicked = (operator) => {
    //edge case 2
    if (currentOperator === "") {
      setMainCalculatorState(parseFloat(otherCalculatorState) || 0);
    } else if (otherCalculatorState !== "") {
      runCommand();
    }
    setOtherCalculatorState("");
    setCurrentOperator(operator);
  };

  const onClearClicked = () => {
    setMainCalculatorState("0");
    setOtherCalculatorState("");
    setCurrentOperator("");
  };

  const runCommand = () => {
    switch (currentOperator) {
      case "+":
        setMainCalculatorState(
          mainCalculatorState + parseFloat(otherCalculatorState)
        );
        break;
      case "-":
        setMainCalculatorState(
          mainCalculatorState - parseFloat(otherCalculatorState)
        );
        break;
      case "*":
        setMainCalculatorState(
          mainCalculatorState * parseFloat(otherCalculatorState)
        );
        break;
      case "/":
        //edge case 1
        if (parseFloat(otherCalculatorState) === 0) {
          window.alert("Can't divide by zero");
          onClearClicked();
          return;
        }
        setMainCalculatorState(
          mainCalculatorState / parseFloat(otherCalculatorState)
        );
        break;
      case "=":
        setMainCalculatorState(parseFloat(otherCalculatorState));
        break;
      default:
        window.alert("Please select a command");
    }
  };

  return (
    <CalculatorView
      currentOperator={currentOperator}
      mainCalculatorState={mainCalculatorState}
      otherCalculatorState={otherCalculatorState}
      onClearClicked={onClearClicked}
      onOperatorClicked={onOperatorClicked}
      onSymbolClicked={onSymbolClicked}
    />
  );
};
