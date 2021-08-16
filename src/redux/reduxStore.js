import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogPageReducer from "./DialogPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";

let bunchOfReducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogPage: DialogPageReducer,
    sidebarPage: SidebarPageReducer,
});

let store = createStore(bunchOfReducers);

export default store;