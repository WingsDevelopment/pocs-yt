import React from "react";

export const OperatorButton = ({
  operator,
  onOperatorClickedFn,
  additionalClass,
}) => {
  return (
    <button
      className={
        "calc-btn operator-btn" + (additionalClass ? " " + additionalClass : "")
      }
      onClick={() => onOperatorClickedFn(operator)}
    >
      {operator}
    </button>
  );
};
