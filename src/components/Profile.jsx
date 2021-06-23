import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          width="100%"
          src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
          alt="funny cat with remote controller"
        />
      </div>
      <div>
        ava + description
        <img src="" />
      </div>
      <div>
        My posts
        <div className={s.posts}>New post</div>
        <div>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
