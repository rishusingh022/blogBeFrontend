import { render } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import { BlogPostProvider } from "../../../contexts/BlogPostContext";

describe("Header", () => {
  it("should render correctly", () => {
    const view = render(
    <BlogPostProvider>
      <Header />
    </BlogPostProvider>);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
