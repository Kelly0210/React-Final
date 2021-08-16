import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/DialogPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC());
    }

    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <Dialogs
            dialogsData={state.dialogPage.dialogsData}
            messagesData={state.dialogPage.messagesData}
            newMessageBody={state.dialogPage.newMessageBody}
            sendMessage={sendMessage}
            onMessageChange={updateNewMessageBody}

        />
    )
}

export default DialogsContainer;