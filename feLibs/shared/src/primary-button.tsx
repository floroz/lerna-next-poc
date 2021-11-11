import React from "react";
import "./primary-button.scss";

export const PrimaryButton = ({ children }) => {
  return <button className="button-primary">{children}</button>;
};
