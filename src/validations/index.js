import { BROWSER_EMAIL_REGEX } from "../constants/validations";

export const isEmail = (value) => {
  return BROWSER_EMAIL_REGEX.test(value);
};
