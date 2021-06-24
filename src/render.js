import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
