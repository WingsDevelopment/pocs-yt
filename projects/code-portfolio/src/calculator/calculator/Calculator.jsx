import React from "react";
import CalculatorBody from "../calculator-body/CalculatorBody";
import { CalculatorScreen } from "../calculator-screen/CalculatorScreen";

export const Calculator = () => {
  const [mainCalculatorState, setMainCalculatorState] = React.useState(0);
  const [otherCalculatorState, setOtherCalculatorState] = React.useState("");
  //can be: c(clear), +, -, *, /, =
  const [currentOperator, setCurrentOperator] = React.useState("");

  const onSymbolClicked = (symbol) => {
    if (otherCalculatorState.includes(".") && symbol === ".") return;
    setOtherCalculatorState(otherCalculatorState + symbol);
  };

  const onOperatorClicked = (operator) => {
    //edge case 2
    if (currentOperator === "") {
      setMainCalculatorState(parseFloat(otherCalculatorState) || 0);
    } else if (otherCalculatorState !== "") {
      calculateNewState();
    }
    setOtherCalculatorState("");
    setCurrentOperator(operator);
  };

  const onClearClicked = () => {
    setMainCalculatorState("0");
    setOtherCalculatorState("");
    setCurrentOperator("");
  };

  const calculateNewState = () => {
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
        window.alert("Please select a operator");
    }
  };

  return (
    <div>
      <CalculatorScreen
        mainCalculatorState={mainCalculatorState}
        currentOperator={currentOperator}
        otherCalculatorState={otherCalculatorState}
      />
      <CalculatorBody
        onSymbolClicked={onSymbolClicked}
        onOperatorClicked={onOperatorClicked}
        onClearClicked={onClearClicked}
      />
    </div>
  );
};
