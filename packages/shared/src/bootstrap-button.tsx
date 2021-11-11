import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export const BootstrapButton = ({ children }) => {
  return <Button className=".bg-success">{children}</Button>;
};
