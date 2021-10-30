import React from 'react';
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

function User(props) {

    return <div>
            <span>
            <div>
            <NavLink to={"/profile/" + props.user.id}>
            <img src={props.user.photos.small != null ? props.user.photos.small :
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_lXtKwsnKL7PQzuZPUkOz49upOxVsHqHDlNmcP9s85MrG7OWJupSzSQSOHB1NHr7GL4&usqp=CAU"}
                 className={style.userPic}
                 alt=""/>
            </NavLink>

            </div>
            <div>
            <button disabled={props.followingInProgress}
                    onClick={() => {
                        props.toggleFollow(props.user.id)
                    }}>{props.isFollowed ? "unFollow" : "Follow"}
            </button>
            </div>
            </span>
        <span>
            <span>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
            </span>
            </span>
    </div>
}

export default User;