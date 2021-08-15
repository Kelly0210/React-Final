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
                <Sidebar sidebarPage={props.state.sidebarPage}/>
                <Route path="/dialogs" render={ () => <Dialogs dialogPage={props.state.dialogPage}
                                                               dispatch={props.dispatch}
                />}/>
                <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch}
                />}/>
            </div>
        </BrowserRouter>
);
}

export default App;
