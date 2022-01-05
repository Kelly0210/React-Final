import './App.css';
import React, {Suspense} from 'react';
import store from "./redux/reduxStore";
import {initializedApp} from "./redux/AppReducer";
import {BrowserRouter, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import Preloader from "./common/preloader";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import ErrorBoundary from "./common/ErrorBoundary";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
// import UsersContainer from "./Components/Users/UsersContainer";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializedApp();
        window.addEventListener("unhandledRejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledRejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="app-wrapper content">
                <HeaderContainer/>
                <SidebarContainer/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
                {/*<Footer />*/}

                <Route path="/" exact render={() => <div>404 NOT
                    FOUND</div>}/> {/* <--Refactor to component with styles and add in common */}
            </div>
        </Suspense>
        </ErrorBoundary>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializedApp})(App)

const MainApp = (props) => {
    return <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>

}

export default MainApp;