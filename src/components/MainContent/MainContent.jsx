import React from "react";
import "./MainContent.css";
import Posts from "../Posts/Posts";
// import jsonData from "../../Assets/mockData/index.json";

import { GET_BlOG_DATA } from "../../constants/apiEndPoints";
import { makeRequest } from "../../utils/makeRequest/makeRequest";

function MainContent() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    makeRequest(GET_BlOG_DATA)
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        setError(error.messsage);
      });
  }, []);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Posts
          key={index}
          id={post.id}
          date={post.date}
          readingTime={post.reading_time}
          title={post.title}
          description={post.description}
          claps={post.claps}
          liked={post.liked}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default MainContent;
