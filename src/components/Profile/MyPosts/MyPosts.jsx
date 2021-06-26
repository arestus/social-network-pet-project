import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        const action = {type: 'ADD-POST'};
        props.dispatch(action)
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
