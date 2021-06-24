import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from 'react-router-dom'

const App = ({state}) => {

    const {profilePage: {posts}, dialogsPage: {messages, dialogs}, sidebar: {friends}} = state


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={friends}/>
                <div className='app-wrapper-content'>
                    {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route exact path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
