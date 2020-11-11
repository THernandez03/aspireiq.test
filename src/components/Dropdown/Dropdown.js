import React, { useState, useEffect, useCallback } from "react";

import { debounce } from "../../utils";
import styles from "./Dropdown.module.scss";

export const Dropdown = ({ term, hiddenValues, onItemClick = () => {} }) => {
  const [filteredValues, setFilteredValues] = useState([]);

  const fetchEmails = async (term) => {
    const response = await fetch(`/api/${term}`);
    const { data } = await response.json();
    setFilteredValues(data);
  };

  const debouncedFetch = useCallback(debounce(fetchEmails, 500), []);

  useEffect(() => {
    if (!term) {
      return setFilteredValues([]);
    }

    debouncedFetch(term);
  }, [term]);

  if (!filteredValues.length) return null;

  return (
    <div className={styles.wrapper}>
      {filteredValues
        .filter((value) => !hiddenValues.has(value))
        .map((value) => (
          <span key={value} className={styles.item} onClick={onItemClick}>
            {value}
          </span>
        ))}
    </div>
  );
};
