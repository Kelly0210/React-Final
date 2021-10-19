import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./DialogItem/MessageItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let messagesElement = props.messagesData.map(message => <MessageItem message={message.message}
                                                                         id={message.id}/>)

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                     id={dialog.id}/>)

    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div>{dialogsElement}</div>
            </div>
            <div className={style.messages}>
                {messagesElement}
                <DialogsReduxForm onSubmit={onSendMessageClick}/>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"newMessageBody"}
               component={"textarea"}
               placeholder={"Enter your message"}
        />
        <br/>
        <button>Send Message</button>
        <button>Delete Message</button>
    </form>
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;