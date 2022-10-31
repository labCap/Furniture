import React from "react";
import "./Button.scss";

export const Button = ({ href, c, text }) => {
  return (
    <a href={href} className={`${c} btn`}>
      {text}
    </a>
  );
};
