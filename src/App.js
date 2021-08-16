import './App.css';
import React from 'react';
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sidebarPage={props.state.sidebarPage}/>
                <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}
                />}/>
                <Route path="/profile" render={ () => <Profile store={props.store}
                />}/>
            </div>
        </BrowserRouter>
);
}

export default App;
