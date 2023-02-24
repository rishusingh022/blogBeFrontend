import React, { createContext } from "react";

export const BlogPostContext = createContext({});

export const BlogPostProvider = ({ children }) => {
  const [posts, setPosts] = React.useState(null);

  return (
    <BlogPostContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogPostContext.Provider>
  );
};
