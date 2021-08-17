import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";

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
    dispatch(action) {
        this._state.profilePage = ProfilePageReducer(this._state.profilePage, action);
        this._state.dialogPage = DialogPageReducer(this._state.dialogPage, action);
        this._state.sidebarPage = SidebarPageReducer(this._state.sidebarPage, action);
        this._callsubsriber(this._state);
        },
};

export default store;