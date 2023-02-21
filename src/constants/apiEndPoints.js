export const BACKEND_URL = "http://localhost:8080/";

export const GET_BlOG_DATA = {
  url: "blog-posts",
  method: "GET",
};

export const UPDATE_BLOG_DATA = (id) => ({
  url: `blog-posts/${id}`,
  method: "put",
});
