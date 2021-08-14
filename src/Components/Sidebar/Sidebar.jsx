import React from 'react';
import style from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const BestFriend = (props) => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU"
                 className={style.bestFriendPic} alt=""/>
        </div>
    )
}

const Sidebar = (props) => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile' className={style.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={style.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={style.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={style.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={style.item}>Settings {props.bestFriends.name}</NavLink>
            </div>
            <div>
                <BestFriend />
            </div>
        </nav>
    )
}

export default Sidebar;