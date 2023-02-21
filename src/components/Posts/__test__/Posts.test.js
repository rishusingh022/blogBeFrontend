import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Posts from "../Posts";

describe("Posts", () => {
  const mockPost = {
    date: "2nd Januray, 2018",
    readingTime: "2 mins",
    title: "The future of abstract art and the culture ...",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    claps: 10,
    liked: false,
    image: "abstract.png",
  };
//   it("should render white heart icon when liked is false", () => {
//     const view = render(<Posts post={mockPost} />);
//     expect(view.getAllByAltText('../../Assets/Images/abstract')).toBeTruthy();
//   });
});
