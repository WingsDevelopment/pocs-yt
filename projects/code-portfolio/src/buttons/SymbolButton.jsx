import React from "react";

export const SymbolComponent = ({
  content,
  onSymbolClickedFn,
  additionalClass,
}) => {
  return (
    <button
      className={
        "calc-btn symbol-btn" + (additionalClass ? " " + additionalClass : "")
      }
      onClick={() => onSymbolClickedFn(content)}
    >
      {content}
    </button>
  );
};
