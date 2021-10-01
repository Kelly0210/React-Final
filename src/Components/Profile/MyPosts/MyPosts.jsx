import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const  MyPosts = (props) => {
debugger
    let postsElement = props.profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={style.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea value={props.profilePage.newPostText}
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