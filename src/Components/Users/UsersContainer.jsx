import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollow, followingInProgress, getUsersThunkCreator
} from "../../redux/UsersPageReducer";
import Users from "./Users";
import Preloader from "../Common/preloader";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        //
        // getUsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
        this.props.getUsersThunkCreator();
    }

    onPageChanged = (pageNumber) => {
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        //
        // getUsersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
        this.props.getUsersThunkCreator();
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
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowed: state.usersPage.isFollowed,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    followingInProgress,
    getUsersThunkCreator
}) (UsersAPIComponent);

export default UsersContainer;