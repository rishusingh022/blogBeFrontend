import React from "react";
import { render, waitFor } from "@testing-library/react";

import PageNotFound from "../PageNotFound";

describe("PageNotFound", () => {
  it("should render without errors", async() => {
    const { container } = render(<PageNotFound />);
    await waitFor (() => expect(container).toBeTruthy());
  });
});
