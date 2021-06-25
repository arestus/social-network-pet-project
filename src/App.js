import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from 'react-router-dom';
import {addNewMessage} from "./redux/state";



const App = (props) => {

    // const {addNewPost} = props
    // const {profilePage: {posts}, dialogsPage: {messages, dialogs}, sidebar: {friends}} = props.state
console.log(props.state.dialogsPage)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route exact path='/dialogs' render={() => <Dialogs addNewMessage={addNewMessage} dialogs={props.state.dialogsPage.dialogs} updateNewMessageText={props.updateNewMessageText} messages={props.state.dialogsPage.messages}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              updateNewPostText={props.updateNewPostText}
                                                              addNewPost={props.addNewPost}/>}/>
            </div>
        </div>
    );
};

export default App;
