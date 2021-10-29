import {authMeAPI, loginAPI, logoutAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userID, email, login, isAuth}
    }
}
export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    let response = await authMeAPI()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    loginAPI(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
                dispatch(stopSubmit("login", {_error:message}))
            }
        });
}
export const logoutThunkCreator = () => (dispatch) => {
    logoutAPI()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;