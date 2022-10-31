import React from "react";
import "./TitleBorder.scss";

export const TitleBorder = ({ c, text }) => {
  return <h2 className={`${c} section__title-border`}>{text}</h2>;
};
