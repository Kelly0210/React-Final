const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    postsData: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How is your IT-Kamasutra", likesCount: 8},
        {id: 3, message: "Why nobody love me?", likesCount: 1},
        {id: 4, message: "Yo", likesCount: 0},
        {id: 5, message: "Yo", likesCount: 0},
    ],
    newPostText: "",
    profile: null,
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: 6, message: newPost, likesCount: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile
        }
        default:
            return state;
    }
};

export const addPost = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default ProfilePageReducer;