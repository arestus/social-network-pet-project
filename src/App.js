import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from 'react-router-dom'


const App = (props) => {

    const {addNewPost} = props
    const {profilePage: {posts}, dialogsPage: {messages, dialogs}, sidebar: {friends}} = props.state


    return (
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
                    <Route path='/profile' render={() => <Profile posts={posts} addNewPost={addNewPost}/>}/>
                </div>
            </div>
    );
};

export default App;
