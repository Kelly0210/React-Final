import React from 'react';
import {sendMessage} from "../../redux/DialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
)(Dialogs);