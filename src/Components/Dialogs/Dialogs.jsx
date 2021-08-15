import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../store/store";
import MessageItem from "./DialogItem/MessageItem";

const Dialogs = (props) => {

    let messagesElement = props.dialogPage.messagesData.map(message => <MessageItem message={message.message}
                                                                                    id={message.id}/>)

    let dialogsElement = props.dialogPage.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                                id={dialog.id}/>)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }

    let onMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div>{dialogsElement}</div>
            </div>
            <div className={style.messages}>
                {messagesElement}
                <textarea value={props.dialogPage.newMessageBody}
                          onChange={onMessageChange}
                          placeholder="Enter your message" />
                <br/>
                <button onClick={onSendMessageClick}>Send Message</button>
                <button>Delete Message</button>
            </div>
        </div>
    )
}

export default Dialogs;