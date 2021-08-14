import './App.css';
import React from 'react';
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar bestFriends={props.state.sidebarPage}/>
                <Route path="/dialogs" render={ () => <Dialogs dialogPage={props.state.dialogPage}/>}/>
                <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage}
                                                               addPost={props.addPost}
                                                               updateNewPostText={props.updateNewPostText}/>}/>
            </div>
        </BrowserRouter>
);
}

export default App;
