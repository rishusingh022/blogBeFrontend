import React, { createContext, useState } from "react";

export const BlogPostContext = createContext({});

export const BlogPostProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  return (
    <BlogPostContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogPostContext.Provider>
  );
};
