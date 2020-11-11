module.exports = {
  snapshotResolver: "<rootDir>/src/configs/jest/snapshotResolver.js",
  transform: {
    ".+\\.(css|styl|less|sass|scss|svg)$": "jest-css-modules-transform",
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
};
