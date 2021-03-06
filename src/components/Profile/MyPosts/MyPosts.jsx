import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>)

    const newPostElement = React.createRef()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
