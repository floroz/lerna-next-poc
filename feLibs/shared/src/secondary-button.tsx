import React from "react";
import styles from "./secondary-button.module.scss";

export const SecondaryButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
