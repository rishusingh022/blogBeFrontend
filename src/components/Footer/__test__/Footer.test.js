import { render } from "@testing-library/react";
import React from "react";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render corrently", () => {
    const view = render(<Footer />);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
