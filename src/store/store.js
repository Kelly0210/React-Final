//ProfilePage
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//dialogPage
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi", likesCount: 12},
                {id: 2, message: "How is your IT-Kamasutra", likesCount: 8},
                {id: 3, message: "Why nobody love me?", likesCount: 1},
                {id: 4, message: "Yo", likesCount: 0},
                {id: 5, message: "Yo", likesCount: 0},
            ],
            newPostText: "",
        },
        dialogPage: {
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
        },
        sidebarPage: {
            bestFriends: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
            ],
        }

    },
    getState() {
        return this._state;
    },
    _callsubsriber() {
        console.log("State changed.");
    },
    subscribe(observer) {
        this._callsubsriber = observer; // observer = pattern // = addEventListener
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callsubsriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callsubsriber(this._state);
    },
    _sendMessage() {
        let newBody = {
            id: 6,
            message: this._state.dialogPage.newMessageBody,
        };
        this._state.dialogPage.messagesData.push(newBody);
        this._state.dialogPage.newMessageBody = "";
        this._callsubsriber(this._state);
    },
    _updateNewMessageBody(newBody) {
        this._state.dialogPage.newMessageBody = newBody;
        this._callsubsriber(this._state);
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText);
                break;
            case SEND_MESSAGE:
                this._sendMessage();
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._updateNewMessageBody(action.newBody);
                break;
            default:
                console.log('Nothing happend');
        }
    },

}
export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody: body,
    }
}

window.store = store;

export default store;