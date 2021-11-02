import './App.css';
import React, {Suspense} from 'react';
import store from "./redux/reduxStore";
import {initializedApp} from "./redux/AppReducer";
import {BrowserRouter, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import Preloader from "./common/preloader";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return <Suspense fallback={<div>Loading...</div>}>
            <div className="app-wrapper content">
                <HeaderContainer/>
                <SidebarContainer/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
            </div>
        </Suspense>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializedApp})(App)

const MainApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default MainApp;