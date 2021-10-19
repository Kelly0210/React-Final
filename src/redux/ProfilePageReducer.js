import {userProfileAPI, updateProfileStatusAPI, getProfileStatusAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postsData: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How is your IT-Kamasutra", likesCount: 8},
        {id: 3, message: "Why nobody love me?", likesCount: 1},
        {id: 4, message: "Yo", likesCount: 0},
        {id: 5, message: "Yo", likesCount: 0},
    ],
    profile: null,
    profileStatus: null
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.postText;
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: newPost, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }
        default:
            return state;
    }
};

export const addPost = (postText) => {
    return {
        type: ADD_POST,
        postText
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setProfileStatus = (profileStatus) => {
    return {
        type: SET_USER_STATUS,
        profileStatus

    }
}

export const getProfileThunkCreator = (userID) => (dispatch) => {
    userProfileAPI(userID)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getProfileStatusThunkCreator = (userID) => (dispatch) => {
    getProfileStatusAPI(userID)
        .then(data => {
                dispatch(setProfileStatus(data));
        })
}

export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
    updateProfileStatusAPI(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        })
}

export default ProfilePageReducer;