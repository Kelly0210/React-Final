import {getAuthUserDataThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = "src/redux/AppReducer/INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })

}

export default appReducer;