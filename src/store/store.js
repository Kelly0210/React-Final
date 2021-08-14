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
            newPostText: 'it-kamasutra',
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
    _callsubsriber()  {
        console.log("State changed.");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callsubsriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callsubsriber(this._state);
    },
    subscribe(observer){
        this._callsubsriber = observer; // observer = pattern // = addEventListener
    },
}


window.store = store;


export default store;