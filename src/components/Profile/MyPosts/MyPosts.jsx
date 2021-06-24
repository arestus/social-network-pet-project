import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'hi!', likes: 12},
        {id: 2, message: 'how are you?', likes: 13},
        {id: 3, message: 'where are you?', likes: 4},
        {id: 4, message: 'my name is', likes: 0},
        {id: 5, message: 'some of them', likes: 44},
        {id: 6, message: 'good', likes: 111},
        {id: 7, message: 'got it', likes: 1111}
    ]

    let postsElements = postsData.map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>Ok</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
