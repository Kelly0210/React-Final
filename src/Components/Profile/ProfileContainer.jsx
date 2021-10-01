import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 10;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profilePage.profile} props={this.props} addPost={this.props.addPost}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    addPost,
    updateNewPostText,
})(withURLDataContainerComponent)