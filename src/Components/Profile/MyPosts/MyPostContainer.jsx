import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let updateNewPost = (text) => {
        props.store.dispatch(updateNewPostAC(text));
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPost}
                 addPost={addPost}/>
    )
}

export default MyPostsContainer;