import { makeRequest } from "../makeRequest";
import {
  UPDATE_BLOG_DATA,
  GET_BlOG_DATA,
} from "../../../constants/apiEndPoints";
import axios from "axios";
jest.mock("axios");
describe("makeRequest", () => {
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
  ];
  it("should make api call with appropriate request option and return response only when only apiEndPoint is passed", async () => {
    const mockedAxios = axios;
    mockedAxios.mockResolvedValue({
      data: mockPostData,
    });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(GET_BlOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: "http://localhost:8080/",
      url: "blog-posts",
      method: "GET",
    });
    expect(response).toEqual(mockPostData);
  });
  it("should make api call with appropriate request option and return response when apiEndPoint and dynamicConfig is passed", async () => {
    const mockedAxios = axios;
    mockedAxios.mockResolvedValue({
      data: {
        data: {
          claps: 10,
          liked: false,
        },
      },
    });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: {
        claps: 10,
        liked: false,
      },
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: "http://localhost:8080/",
      url: "blog-posts/1",
      method: "put",
      data: {
        claps: 10,
        liked: false,
      },
    });
    expect(response).toEqual({
      data: {
        claps: 10,
        liked: false,
      },
    });
  });
});
