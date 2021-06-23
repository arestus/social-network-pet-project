import React from "react";
import s from "./Post.module.css";

const Post = ({ message, likes }) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
        alt="avatar"
      />
      {message}
      <div>
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default Post;
