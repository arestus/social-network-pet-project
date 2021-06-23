import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea>Ok</textarea>
        <button>Add post</button>
      </div>
      <div >
        <Post message="Hi, how are you?" likes="12" />
        <Post message="It's my first post" likes="4" />
      </div>
    </div>
  );
};

export default MyPosts;
