import React from 'react';
import Paginator from "../../common/Paginator";
import User from "./User";

function Users(props) {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>

        {props.usersData.map(user => <User user={user}
                                           key={user.id}
                                           followingInProgress={props.followingInProgress}
                                           toggleFollow={props.toggleFollow}
                                           isFollowed={props.isFollowed}
        />)}
    </div>
}

export default Users;