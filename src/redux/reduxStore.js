import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";

let bunchOfReducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogPage: DialogPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
});

let store = createStore(bunchOfReducers);

window.store = store;

export default store;