import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";

const MessageItem = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )

}

const Dialogs = (props) => {

    let messagesElement = props.dialogPage.messagesData.map(message => <MessageItem message={message.message} id={message.id}/>)

    let dialogsElement = props.dialogPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;