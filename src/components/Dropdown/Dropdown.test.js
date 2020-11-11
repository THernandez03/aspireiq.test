import React from "react";
import { render } from "@testing-library/react";

import { Dropdown } from "./Dropdown";

describe("<Dropdown/>", () => {
  it("should render a Dropdown", () => {
    const { container } = render(<Dropdown />);
    expect(container).toMatchSnapshot();
  });
});
