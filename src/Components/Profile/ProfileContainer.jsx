import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getUserProfileThunkCreator, updateNewPostText} from "../../redux/ProfilePageReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        this.props.getUserProfileThunkCreator(userID);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return <Profile {...this.props} profile={this.props.profile} addPost={this.props.addPost}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
};

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getUserProfileThunkCreator
})(WithURLDataContainerComponent)