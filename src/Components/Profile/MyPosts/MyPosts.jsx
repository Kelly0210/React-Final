import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const  MyPosts = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={style.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                              column="50" rows="10"/>
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