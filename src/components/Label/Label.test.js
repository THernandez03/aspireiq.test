import React from "react";
import { render } from "@testing-library/react";

import { Label } from "./Label";

describe("<Label/>", () => {
  it("should render a Label", () => {
    const { container, rerender } = render(<Label />);
    expect(container).toMatchSnapshot();
    rerender(<Label>valid@email.com</Label>);
    expect(container).toMatchSnapshot();
    rerender(<Label>invalid_email.com</Label>);
    expect(container).toMatchSnapshot();
  });
});
