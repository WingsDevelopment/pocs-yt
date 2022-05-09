import React from "react";
import { CalculatorView } from "./CalculatorView";

const initialState = {
  mainCalculatorState: 0, //<- number
  otherCalculatorState: "", //<- string
  currentOperator: "", //<- can be: c(clear), +, -, *, /, =
};

const calculateNewState = (currentState, otherState, operator) => {
  switch (operator) {
    case "+":
      return currentState + parseFloat(otherState);
    case "-":
      return currentState - parseFloat(otherState);
    case "*":
      return currentState * parseFloat(otherState);
    case "/":
      //edge case 1
      if (parseFloat(otherState) === 0) {
        window.alert("Can't divide by zero");
        return currentState;
      }
      return currentState / parseFloat(otherState);
    case "=":
      return parseFloat(otherState);
    default:
      window.alert("Invalid operator selected");
  }
};

export const ACTIONS = {
  CLEAR: "CLEAR",
  ADD_SYMBOL: "ADD_SYMBOL", //number or .
  SET_CURRENT_OPERATOR: "SET_CURRENT_OPERATOR",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLEAR:
      return { ...initialState };
    case ACTIONS.ADD_SYMBOL:
      if (state.otherCalculatorState.includes(".") && action.payload === ".") {
        return state;
      } else {
        return {
          ...state,
          otherCalculatorState: state.otherCalculatorState + action.payload,
        };
      }
    case ACTIONS.SET_CURRENT_OPERATOR:
      //copy state for code simplicity
      let newState = { ...state };
      if (state.currentOperator === "") {
        //set main calculator state to other calculator state
        newState.mainCalculatorState =
          parseFloat(state.otherCalculatorState) || 0;
      } else if (state.otherCalculatorState !== "") {
        //calculate main calculator state
        newState.mainCalculatorState = calculateNewState(
          newState.mainCalculatorState,
          newState.otherCalculatorState,
          newState.currentOperator
        );
      }
      //reset other calculator state
      newState.otherCalculatorState = "";
      //set current operator
      newState.currentOperator = action.payload;
      //return new state
      return newState;
    default:
      throw new Error("Invalid action type");
  }
}

export const CalculatorWithReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onSymbolClicked = (symbol) => {
    dispatch({ type: "ADD_SYMBOL", payload: symbol });
  };

  const onOperatorClicked = (operator) => {
    dispatch({ type: "SET_CURRENT_OPERATOR", payload: operator });
  };

  const onClearClicked = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <CalculatorView
      currentOperator={state.currentOperator}
      mainCalculatorState={state.mainCalculatorState}
      otherCalculatorState={state.otherCalculatorState}
      onClearClicked={onClearClicked}
      onOperatorClicked={onOperatorClicked}
      onSymbolClicked={onSymbolClicked}
    />
  );
};
