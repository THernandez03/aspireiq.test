export const debounce = (fn, delay) => {
  let time;

  return (...args) => {
    const after = () => {
      time = null;
      fn(...args);
    };

    clearTimeout(time);
    time = setTimeout(after, delay);
  };
};
