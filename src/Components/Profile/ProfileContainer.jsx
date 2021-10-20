import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.currentUserID;
        }
        this.props.getProfileThunkCreator(userID);
        this.props.getProfileStatusThunkCreator(userID);
    }

    render(){
        return <Profile {...this.props}
                        profile={this.props.profile}
                        addPost={this.props.addPost}
                        profileStatus={this.props.profileStatus}
                        updateStatus={this.props.updateProfileStatusThunkCreator}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage,
        profileStatus: state.profilePage.profileStatus,
        currentUserID: state.auth.userID,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost,
        getProfileThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator,
        }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)