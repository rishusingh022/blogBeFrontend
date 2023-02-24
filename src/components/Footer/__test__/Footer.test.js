import { render } from "@testing-library/react";
import React from "react";
import { BlogPostProvider } from "../../../contexts/BlogPostContext";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render corrently", () => {
    const view = render(
      <BlogPostProvider>
        <Footer />
      </BlogPostProvider>
    );
    expect(view.asFragment()).toMatchSnapshot();
  });
});
