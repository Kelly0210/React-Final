import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/DialogPageReducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostAC(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;