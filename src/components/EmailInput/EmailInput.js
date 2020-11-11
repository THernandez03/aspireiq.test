import React, { useReducer } from "react";

import Label from "../Label";
import styles from "./EmailInput.module.scss";

const ADD_EMAIL = "ADD_EMAIL";
const REMOVE_EMAIL = "REMOVE_EMAIL";
const SHOW_DROPDOWN = "SHOW_DROPDOWN";
const HIDE_DROPDOWN = "HIDE_DROPDOWN";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_EMAIL: {
      const { emails } = state;
      emails.add(action.payload);
      return { emails };
    }
    case REMOVE_EMAIL: {
      const { emails } = state;
      emails.delete(action.payload);
      return { emails };
    }
  }
};

export const EmailInput = ({ placeholder }) => {
  const [state, dispatch] = useReducer(Reducer, { emails: new Set() });

  return (
    <div className={styles.wrapper}>
      <div className={styles.labels}>
        {[...state.emails].map((email) => (
          <Label
            key={email}
            className={styles.label}
            onIconClick={() => {
              dispatch({ type: REMOVE_EMAIL, payload: email });
            }}
          >
            {email}
          </Label>
        ))}
      </div>
      <input
        type="email"
        placeholder={placeholder}
        onKeyDown={(event) => {
          const { key, target } = event;
          const { value } = target;

          event.stopPropagation();

          if (!value || state.emails.has(value)) return;

          if (key === "Enter" || key === "Tab") {
            dispatch({ type: ADD_EMAIL, payload: value });
            target.value = "";
          }
        }}
      ></input>
    </div>
  );
};
