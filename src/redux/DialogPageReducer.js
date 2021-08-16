const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your IT-Kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessageBody: "",
};

const DialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newBody = {
                id: 6,
                message: state.newMessageBody,
            };
            state.messagesData.push(newBody);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        default:
            return state;
    }
};

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody: body,
    }
};

export default DialogPageReducer;