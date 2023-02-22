import React from "react";
import "./Posts.css";
import clapping from "../../Assets/Icons/clapping.svg";
import heart from "../../Assets/Icons/heart-black.svg";
import likedHeart from "../../Assets/Icons/heart-red.svg";

import dateFromUtcDate from "../../utils/common/dateFromUtcDate";
import { makeRequest } from "../../utils/makeRequest/makeRequest";
const { UPDATE_BLOG_DATA } = require("../../constants/apiEndPoints");

function Posts(props) {
  const [like, setLike] = React.useState(props.liked);
  const [clap, setClap] = React.useState(props.claps);
  const clapHandler = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(props.id), {
        data: {
          claps: clap + 1,
        },
      });
      setClap(clap + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const likeHandler = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(props.id), {
        data: {
          liked: !like,
        },
      });
      setLike(!like);
    } catch (error) {
      console.log(error);
    }
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
          <p>{clap}</p>
        </div>
        <div className="likes">
          <img
            data-testid="blackRedHeart"
            onClick={likeHandler}
            src={like ? likedHeart : heart}
            alt="heart"
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
