import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import Error from "../Error";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
describe("Error", () => {
  it("should render without errors", async () => {
    // without using toBeInTheDocument
    const { container } = render(<Error />);
    await waitFor(() => expect(container).toBeTruthy());
  });
  // it("should render with error code", async () => {
  //   jest.mock("react-router-dom", () => ({
  //     ...jest.requireActual("react-router-dom"),
  //     useParams: jest.fn().mockReturnValue({ errorCode: 404 }),
  //   }));
  //   const { getByText } = render(<Error />);
  //   await waitFor(() => expect(getByText("404")).toBeTruthy());
  // });
});
