import {ProfileAPI} from "../API/API";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS";


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
            let newPost = action.newPostBody;
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: newPost, likesCount: 0}]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id != action.postID)
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,

            }
        default:
            return state;
    }
};

export const addPost = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const setProfileStatus = (profileStatus) => {
    return {
        type: SET_USER_STATUS,
        profileStatus

    }
};
export const deletePost = (postID) => {
    return {
        type: DELETE_POST,
        postID
    }
};
export const SavePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
};
export const SaveProfileSuccess = (profile) => {
    return {
        type: SAVE_PROFILE_SUCCESS,
        profile
    }
};

export const getProfileThunkCreator = (userID) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(userID)
    dispatch(setUserProfile(response.data));
}

export const getProfileStatusThunkCreator = (userID) => async (dispatch) => {
    let response = await ProfileAPI.getProfileStatus(userID)
    dispatch(setProfileStatus(response.data));
}

export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let response = await ProfileAPI.saveAvatar(file);

    if (response.data.resultCode === 0) {
        dispatch(SavePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    let response = await ProfileAPI.saveTextProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfileThunkCreator(userID));
    } else {
        dispatch(stopSubmit("profileDataForm", {_error: response.data.messages[0]}));
        // return Promise.reject(response.data.messages[0]);
    }
}

export default ProfilePageReducer;