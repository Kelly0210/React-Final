import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollow
} from "../../redux/UsersPageReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}
        &count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.isFetching(false);
                this.props.getUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.isFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${page}
        &count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.isFetching(false);
                this.props.getUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       usersData={this.props.usersData}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       toggleFollow={this.props.toggleFollow}
                       onPageChanged={this.onPageChanged}
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
    }
};

const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetching,
}) (UsersAPIComponent);

export default UsersContainer;