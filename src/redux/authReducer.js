import {LoginAPI, SecurityAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const CAPTCHA_SUCCESSFUL = "CAPTCHA_SUCCESSFUL";

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case CAPTCHA_SUCCESSFUL:
            return {
                ...state,
                captcha: action.captcha
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
export const CaptchaSuccessful = (captcha) => {
    return {
        type: CAPTCHA_SUCCESSFUL,
        captcha
    }
}

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    const response = await LoginAPI.authToServer()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await LoginAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaThunkCreator());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logoutThunkCreator = () => async (dispatch) => {
    const response = await LoginAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export const getCaptchaThunkCreator = () => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaURL();
    const CaptchaURL = response.data.url;
    dispatch(CaptchaSuccessful(CaptchaURL));
}

export default authReducer;