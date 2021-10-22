import './App.css';
import React from 'react';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializedApp} from "./redux/AppReducer";
import Preloader from "./Components/Common/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return <BrowserRouter>
            <div className="app-wrapper content">
                <HeaderContainer/>
                <SidebarContainer/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
            </div>
        </BrowserRouter>

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App)
