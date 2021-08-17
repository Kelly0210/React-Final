import './App.css';
import React from 'react';
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <SidebarContainer />
                <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                <Route path="/profile" render={ () => <Profile/>}/>
            </div>
        </BrowserRouter>
);
}

export default App;
