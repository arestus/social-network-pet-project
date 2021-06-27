import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (state) => {
    // debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

// _callSubscriber(store.getState())
//
// store.subscribe(_callSubscriber)

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})