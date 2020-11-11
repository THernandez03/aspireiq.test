import React from "react";
import classnames from "classnames";

import { isEmail } from "../../validations";
import { Warning, Close } from "../Icons";
import styles from "./Label.module.scss";

export const Label = ({ children, onIconClick = () => {} }) => {
  const isValid = isEmail(children);

  if (!children) return null;

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.invalid]: !isValid,
      })}
    >
      <span className={styles.text}>{children.toLowerCase()}</span>
      <div className={styles.icon} onClick={() => onIconClick()}>
        {isValid ? <Close /> : <Warning />}
      </div>
    </div>
  );
};
