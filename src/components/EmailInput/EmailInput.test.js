import React from "react";
import { render } from "@testing-library/react";

import { EmailInput } from "./EmailInput";

describe("<EmailInput/>", () => {
  it("should render a EmailInput", () => {
    const { container } = render(<EmailInput />);
    expect(container).toMatchSnapshot();
  });
});
