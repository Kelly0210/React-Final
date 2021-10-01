import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMThq-gY-EZkQ-raLZdOc8VZIwwhQDxipuNQ&usqp=CAU"/>
            </div>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )

}

export default Header;

