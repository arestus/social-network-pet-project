import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    // const {addNewPost} = props
    // const {profilePage: {posts}, dialogsPage: {messages, dialogs}, sidebar: {friends}} = props.state
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route exact path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}
                />}/>
            </div>
        </div>
    );
};

export default App;
