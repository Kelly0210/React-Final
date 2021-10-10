import React from 'react';
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [ ];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && style.pickedPage}
                                 onClick={(event) => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            {props.usersData.map(user =>
                <div>
                    <span>
                        <div>
                    <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small :
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_lXtKwsnKL7PQzuZPUkOz49upOxVsHqHDlNmcP9s85MrG7OWJupSzSQSOHB1NHr7GL4&usqp=CAU"}
                        className={style.userPic}
                        alt=""/>
                    </NavLink>
                        </div>
                            <div>
                    {/*<button onClick={(event) => {*/}

                    {/*     let serverFollow = () => {*/}
                    {/*         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,*/}
                    {/*             {},*/}
                    {/*             {withCredentials: true, headers: {"API_KEY": "31cc17d5-5168-47dc-b946-ed736858adc1"}})*/}
                    {/*             .then(response => {*/}
                    {/*                 if (response.data.resultCode === 0) {*/}
                    {/*                     props.toggleFollow(user.id)*/}
                    {/*                 }*/}
                    {/*             })};*/}

                    {/*     let serverUnFollow = () => axios.post(`https://social-network.samuraijs.com/api/1.0/delete/${user.id}`,*/}
                    {/*         {},*/}
                    {/*         {withCredentials: true, headers: {"API_KEY": "31cc17d5-5168-47dc-b946-ed736858adc1"}})*/}
                    {/*         .then(response => {*/}
                    {/*             if (response.data.resultCode === 0) {*/}
                    {/*                 props.toggleFollow(user.id)*/}
                    {/*             }*/}
                    {/*         });*/}

                    {/*     if (user.isFollowed) {*/}
                    {/*         return serverUnFollow();*/}
                    {/*     } else if (user.isFollowed === false) {*/}
                    {/*         return serverFollow();*/}
                    {/*     }*/}

                    {/* }}>*/}
                    {/*     {user.isFollowed ? "unFollow" : "Follow"}*/}
                    {/*</button>*/}
                            </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/*<div>{user.location.country}, {user.location.city}</div>*/}
                </span>
            </span>
                </div>)}
        </div>
    )
}

export default Users;