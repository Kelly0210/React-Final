import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "dialogs/" + props.id

    return (
        <div className={style.dialog}>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;