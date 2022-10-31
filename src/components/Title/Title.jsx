import React from "react";
import "./Title.scss";

export const Title = ({ c, text }) => {
  return <h2 className={`${c} section__title`}>{text}</h2>;
};
