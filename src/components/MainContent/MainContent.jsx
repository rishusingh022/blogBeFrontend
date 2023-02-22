import React from "react";
import "./MainContent.css";
import Posts from "../Posts/Posts";
// import jsonData from "../../Assets/mockData/index.json";

import { GET_BlOG_DATA } from "../../constants/apiEndPoints";
import { makeRequest } from "../../utils/makeRequest/makeRequest";

import { useNavigate } from "react-router-dom";


function MainContent() {
  const navigate = useNavigate;
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    makeRequest(GET_BlOG_DATA, {} , navigate)
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        setError(error.messsage);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
