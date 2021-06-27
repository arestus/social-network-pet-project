import React from 'react'
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (text) => {
        const action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action)
    }

    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
}

export default DialogsContainer;