import React, { useContext } from "react";
import "./Posts.css";
import clapping from "../../Assets/Icons/clapping.svg";
import heart from "../../Assets/Icons/heart-black.svg";
import likedHeart from "../../Assets/Icons/heart-red.svg";

import dateFromUtcDate from "../../utils/common/dateFromUtcDate";
import { makeRequest } from "../../utils/makeRequest/makeRequest";
import { BlogPostContext } from "../../contexts/BlogPostContext";
const { UPDATE_BLOG_DATA } = require("../../constants/apiEndPoints");

function Posts(props) {
  const { posts, setPosts } = useContext(BlogPostContext);
  let id = props.id;
  // find the index of the post
  let index = posts.findIndex((post) => post.id === id);
  // update the claps
  // const [like, setLike] = React.useState(props.liked);
  // const [clap, setClap] = React.useState(props.claps);
  const clapHandler = async () => {
    await makeRequest(UPDATE_BLOG_DATA(props.id), {
      data: {
        claps: posts[index].claps + 1,
      },
    });
    setPosts([
      ...posts.slice(0, index),
      {
        ...posts[index],
        claps: posts[index].claps + 1,
      },
      ...posts.slice(index + 1),
    ]);
    
  };
  const likeHandler = async () => {
    await makeRequest(UPDATE_BLOG_DATA(props.id), {
      data: {
        liked: posts[index].liked ? false : true,
      },
    });
    // update the state
    let updatedPosts = [...posts];
    updatedPosts[index].liked = updatedPosts[index].liked ? false : true;
    setPosts(updatedPosts);
  };
  const imgSrc = props.image;
  return (
    <div className="card" data-testid="blog-posts">
      <div className="card__image">
        <img src={imgSrc} alt="postImage" />
      </div>
      <div className="card__content">
        <div className="card__content__date">
          <p>{dateFromUtcDate(props.date)}</p>
          <p>{props.reading_time}</p>
        </div>
        <div className="card__content__title">
          <h3>{props.title}</h3>
        </div>
        <div className="card__content__description">
          <p>{props.description}</p>
        </div>
        <hr />
      </div>
      <div className="card__footer">
        <div className="claps">
          <img onClick={clapHandler} src={clapping} alt="clapping"></img>
          <p>{posts[index].claps}</p>
        </div>
        <div className="likes">
          <img
            data-testid="RedHeart"
            onClick={likeHandler}
            src={posts[index].liked ? likedHeart : heart}
            alt="heart"
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
