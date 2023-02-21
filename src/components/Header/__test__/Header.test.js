import { render } from "@testing-library/react";
import Header from "../Header";
import React from "react";

describe("Header", () => {
  it("should render correctly", () => {
    const view = render(<Header />);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
