import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatusThunkCreator,
    getProfileThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.currentUserID;
            if (!userID) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfileThunkCreator(userID);
        this.props.getProfileStatusThunkCreator(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID != prevProps.match.params.userID) {
            this.refreshProfile();
        }

    }


    render() {
        return <Profile {...this.props}
                        isOwner={!!this.props.match.params.userID}
                        profile={this.props.profile}
                        addPost={this.props.addPost}
                        profileStatus={this.props.profileStatus}
                        savePhoto={this.props.savePhotoThunkCreator}
                        updateStatus={this.props.updateProfileStatusThunkCreator}
                        saveProfile={this.props.saveProfileThunkCreator}
        />
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
        savePhotoThunkCreator,
        saveProfileThunkCreator
    }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)