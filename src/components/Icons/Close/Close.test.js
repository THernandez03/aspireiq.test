import React from "react";
import { render } from "@testing-library/react";

import { Close } from "./Close";

describe("<Close/>", () => {
  it("should render a Close", () => {
    const { container } = render(<Close />);
    expect(container).toMatchSnapshot();
  });
});
