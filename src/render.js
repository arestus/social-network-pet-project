import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updateNewPostText,updateNewMessageText,addNewMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
