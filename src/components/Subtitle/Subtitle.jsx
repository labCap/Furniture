import React from "react";
import "./Subtitle.scss";

export const Subtitle = ({ c, text }) => {
  return <h3 className={`${c} subtitle`}>{text}</h3>;
};
