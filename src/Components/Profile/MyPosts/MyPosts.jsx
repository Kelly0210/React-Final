import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {addPostAC, updateNewPostAC} from "../../../store/store";

const  MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostAC(text));
    }
    return (
        <div>
            <div className={style.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onPostChange}
                              placeholder="Create your Post!"/>
                    <br/>
                    <button onClick={ addPost }>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;