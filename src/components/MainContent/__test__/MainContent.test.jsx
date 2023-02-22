import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import MainContent from "../MainContent";
import { makeRequest } from "../../../utils/makeRequest/makeRequest";
jest.mock("../../../utils/makeRequest/makeRequest");
describe("MainContent", () => {
  const mockPostData = [
    {
      date: "2nd Januray, 2018",
      readingTime: "2 mins",
      title: "The future of abstract art and the culture ...",
      description:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
      claps: 10,
      liked: false,
      image: "abstract.png",
    },
    {
      date: "2nd Januray, 2018",
      readingTime: "2 mins",
      title: "The future of abstract art and the culture ...",
      description:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
      claps: 10,
      liked: false,
      image: "abstract.png",
    },
  ];
  it("should show the blog posts when data is loaded", async () => {
    makeRequest.mockResolvedValue(mockPostData);
    render(<MainContent />);
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-posts").length).toEqual(2);
    });
  });
});
