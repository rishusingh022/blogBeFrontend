/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Posts from "../Posts";
import { makeRequest } from "../../../utils/makeRequest/makeRequest";
import {
  BlogPostContext,
} from "../../../contexts/BlogPostContext";

jest.mock("../../../utils/makeRequest/makeRequest");

describe("Posts", () => {
  const mockSetPosts = jest.fn();
  const mockPost = {
    id: 5,
    date: "2023-02-11T08:15:00.001Z",
    reading_time: "9 mins",
    title: "Stay inspired: top artists blog to get your creativity flowing",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Proin semper ex leo, ut elementum erat rutrum non. Praesent luctus at urna quis elementum.",
    claps: 45,
    liked: false,
    image: "https://i.ibb.co/dLMY5G2/inspired.png",
  };
  const mockLikedPost = {
    id: 5,
    date: "2023-02-11T08:15:00.001Z",
    reading_time: "9 mins",
    title: "Stay inspired: top artists blog to get your creativity flowing",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Proin semper ex leo, ut elementum erat rutrum non. Praesent luctus at urna quis elementum.",
    claps: 45,
    liked: true,
    image: "https://i.ibb.co/dLMY5G2/inspired.png",
  };
  const renderPosts = (mockPost) => {
    return render(
      <BlogPostContext.Provider
        value={{
          posts: [mockPost],
          setPosts: mockSetPosts,
        }}
      >
        <Posts {...mockPost} />
      </BlogPostContext.Provider>
    );
  };
  it("should render card with abstract image", async () => {
    const { getByAltText } = renderPosts(mockPost);
    const imgElement = getByAltText("postImage");
    await waitFor(() => {
      expect(screen.getByAltText("postImage")).toBeTruthy();
    });
    expect(imgElement.getAttribute("src")).toBe(mockPost.image);
  });
  it("should render card with date", async () => {
    const { getByText } = renderPosts(mockPost);
    const dateElement = getByText("11 February 2023");
    await waitFor(() => {
      expect(screen.getByText("11 February 2023")).toBeTruthy();
    });
    expect(dateElement).toBeTruthy();
  });
  it("should render card with reading time", async () => {
    const { getByText } = renderPosts(mockPost);
    const readingTimeElement = getByText("9 mins");
    await waitFor(() => {
      expect(screen.getByText("9 mins")).toBeTruthy();
    });
    expect(readingTimeElement).toBeTruthy();
  });
  it("should render card with title", async () => {
    const { getByText } = renderPosts(mockPost);
    const titleElement = getByText(mockPost.title);
    await waitFor(() => {
      expect(screen.getByText(mockPost.title)).toBeTruthy();
    });
    expect(titleElement).toBeTruthy();
  });
  it("should render card with description", async () => {
    const { getByText } = renderPosts(mockPost);
    const descriptionElement = getByText(mockPost.description);
    await waitFor(() => {
      expect(screen.getByText(mockPost.description)).toBeTruthy();
    });
    expect(descriptionElement).toBeTruthy();
  });
  it("should render with clap image", () => {
    const { getByAltText } = renderPosts(mockPost);
    const imgElement = getByAltText("clapping");
    expect(imgElement.getAttribute("src")).toBe("clapping.svg");
  });
  it("should render with clap count", () => {
    const { getByText } = renderPosts(mockPost);
    const clapCountElement = getByText(mockPost.claps);
    expect(clapCountElement).toBeTruthy();
  });
  it("should increase the clap count on click", async () => {
    makeRequest.mockResolvedValue({
      data: {
        claps: 46,
        liked: false,
      },
    });
    const { getByAltText } = renderPosts(mockPost);
    const imgElement = getByAltText("clapping");
    expect(screen.getByText("45")).toBeTruthy();
    fireEvent.click(imgElement);
    await waitFor(() => {
      expect(mockSetPosts).toHaveBeenCalledTimes(1);
    });
    expect(mockSetPosts).toBeCalledWith([
      {
        ...mockPost,
        claps: 46,
      },
    ]);
  });

  it("should render with heart image", () => {
    const { getByAltText } = renderPosts(mockPost);
    const imgElement = getByAltText("heart");
    expect(imgElement.getAttribute("src")).toBe("heart-black.svg");
  });
  it("should render with red heart if liked", async () => {
    makeRequest.mockResolvedValue({});
    const { getByAltText } = renderPosts(mockPost);
    const imgElement = getByAltText("heart");
    expect(imgElement.getAttribute("src")).toBe("heart-black.svg");
    fireEvent.click(imgElement);
    await waitFor(() => {
      expect(mockSetPosts).toHaveBeenCalledTimes(1);
    });
    expect(mockSetPosts).toBeCalledWith([
      {
        ...mockPost,
        liked: true,
      },
    ]);
  });
  it("should render with black heart if clicked again", async () => {
    makeRequest.mockResolvedValue({
      data: {
        claps: 45,
        liked: false,
      },
    });
    const { getByAltText } = renderPosts(mockLikedPost);
    const imgElement = getByAltText("heart");
    expect(imgElement.getAttribute("src")).toBe("heart-red.svg");
    fireEvent.click(imgElement);
    await waitFor(() => {
      expect(mockSetPosts).toHaveBeenCalledTimes(1);
    });
    expect(mockSetPosts).toBeCalledWith([
      {
        ...mockLikedPost,
        liked: false,
      },
    ]);
  });
});
