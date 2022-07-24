import React from "react";

import "./Button.css";

export const Button = ({ content, onClickFn, color = "dark" | "light" }) => {
  return (
    <button
      className={
        "text calculator-button" +
        (color === "dark" ? " symbol-btn" : " ") +
        (color === "light" ? " operator-btn" : " ")
      }
      onClick={() => onClickFn(content)}
    >
      {content}
    </button>
  );
};
