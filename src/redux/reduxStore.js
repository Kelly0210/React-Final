import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./AppReducer";

let bunchOfReducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogPage: DialogPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(bunchOfReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;