import React from "react";
import "./Description.scss";

export const Description = ({ c, text }) => {
  return <div className={`${c} description`}>{text}</div>;
};
