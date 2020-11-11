import React from "react";
import { render } from "@testing-library/react";

import { Warning } from "./Warning";

describe("<Warning/>", () => {
  it("should render a Warning", () => {
    const { container } = render(<Warning />);
    expect(container).toMatchSnapshot();
  });
});
