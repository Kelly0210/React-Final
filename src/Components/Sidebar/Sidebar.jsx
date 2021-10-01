import React from 'react';
import style from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const BestFriend = (props) => {

    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={style.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU"
                    className={style.bestFriendPic}/>
            </NavLink>
        </div>
    )
}

const Sidebar = (props) => {

    let bestFriendElement = props.bestFriends.map(friend => <BestFriend name={friend.name} id={friend.id}/>);

    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile/:userID?' className={style.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={style.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={style.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={style.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={style.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={style.item}>Settings</NavLink>
            </div>
            <div>
                {bestFriendElement}
            </div>
        </nav>
    )
}

export default Sidebar;