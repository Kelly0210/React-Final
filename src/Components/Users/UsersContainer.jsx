import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollow, followingInProgress, getUsersThunkCreator
} from "../../redux/UsersPageReducer";
import Users from "./Users";
import Preloader from "../Common/preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getIsFollowed,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/usersSelectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       usersData={this.props.usersData}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       toggleFollow={this.props.toggleFollow}
                       onPageChanged={this.onPageChanged}
                       isFollowed={this.props.isFollowed}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowed: getIsFollowed(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        setCurrentPage,
        followingInProgress,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersAPIComponent)

