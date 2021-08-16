const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postsData: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "How is your IT-Kamasutra", likesCount: 8},
            {id: 3, message: "Why nobody love me?", likesCount: 1},
            {id: 4, message: "Yo", likesCount: 0},
            {id: 5, message: "Yo", likesCount: 0},
        ],
        newPostText: "",
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default ProfilePageReducer;