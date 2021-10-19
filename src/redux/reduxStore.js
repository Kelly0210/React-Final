import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let bunchOfReducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogPage: DialogPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(bunchOfReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;