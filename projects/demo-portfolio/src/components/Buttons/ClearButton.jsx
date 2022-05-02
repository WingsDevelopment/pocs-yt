import React from "react";

export const ClearButton = ({ onClearClickedFn }) => {
  return (
    <button className="calc-btn operator-btn" onClick={onClearClickedFn}>
      c
    </button>
  );
};
