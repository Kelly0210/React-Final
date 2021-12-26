const SEND_MESSAGE = "src/redux/authReducer/SEND-MESSAGE";

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
};

const DialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newBody = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: newBody}]
            }
        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default DialogPageReducer;