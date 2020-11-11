import React, { useReducer } from "react";

import { TYPE, ADD_EMAIL, REMOVE_EMAIL } from '../../constants/actionTypes';
import Label from "../Label";
import Dropdown from "../Dropdown";
import styles from "./EmailInput.module.scss";


const Reducer = (state, action) => {
  switch (action.type) {
    case TYPE: {
      return { ...state, input: action.payload };
    }
    case ADD_EMAIL: {
      const { emails } = state;
      emails.add(action.payload);
      return { input: '', emails };
    }
    case REMOVE_EMAIL: {
      const { emails } = state;
      emails.delete(action.payload);
      return { ...state, emails };
    }
  }
};

export const EmailInput = ({ placeholder }) => {
  const [state, dispatch] = useReducer(Reducer, {
    input: "",
    emails: new Set()
  });

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
        value={state.input}
        placeholder={placeholder}
        onChange={(event) => {
          dispatch({ type: TYPE, payload: event.target.value });
        }}
        onKeyDown={(event) => {
          const { key, target } = event;
          const { value } = target;

          event.stopPropagation();

          if (!value || state.emails.has(value)) return;

          if (key === "Enter" || key === "Tab") {
            dispatch({ type: ADD_EMAIL, payload: value });
          }
        }}
      />

      <Dropdown
        term={state.input}
        hiddenValues={state.emails}
        onItemClick={(event) => {
          dispatch({ type: ADD_EMAIL, payload: event.target.innerText });
        }}
      />
    </div>
  );
};
