import React from "react";
import "./Posts.css";
import clapping from "../Assets/Icons/clapping.svg";
import heart from "../Assets/Icons/heart-black.svg";
import likedHeart from "../Assets/Icons/heart-red.svg";

function Posts(props) {
  const [like, setLike] = React.useState(props.liked);
  const [clap, setClap] = React.useState(props.claps);
  const clapHandler = () => {
    setClap(clap+1);
  };
  const likeHandler = () => {
    setLike(!like);
  };
  const imgSrc = require(`../Assets/Images/${props.image}`);
  return (
    <div className="card">
      <div className="card__image">
        <img src={imgSrc} alt="post" />
      </div>
      <div className="card__content">
        <div className="card__content__date">
          <p>{props.date}</p>
          <p>{props.readingTime}</p>
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
