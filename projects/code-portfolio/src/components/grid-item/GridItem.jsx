import React from "react";

import "./GridItem.css";

export const GridItem = ({ children, isTall, isWide }) => {
  return (
    <div
      className={
        "calculator-button-container" +
        (isTall ? " grid-item-tall" : "") +
        (isWide ? " grid-item-wide" : "")
      }
    >
      {children}
    </div>
  );
};
