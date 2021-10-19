import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.profilePage.postsData.map(post => <Post message={post.message}
                                                                     likesCount={post.likesCount}/>)

    let addPost = (values) => {
        props.addPost(values.postText);
    }

    return <div className={style.postsBlock}>
        <h2>My posts</h2>
        <div>
            <PostsReduxForm onSubmit={addPost}/>
        </div>
        <div>
            {postsElement}
        </div>
    </div>


}

const PostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"postText"}
               component={"textarea"}
               placeholder="Create your Post!"

        />
        <br/>
        <button>Add post</button>
        <button>Remove</button>
    </form>
}

const PostsReduxForm = reduxForm({form: 'posts'})(PostsForm)

export default MyPosts;