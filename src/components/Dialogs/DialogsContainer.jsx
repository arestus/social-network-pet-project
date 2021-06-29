import React from 'react'
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     const state = props.store.getState().dialogsPage
//
//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//
//     const onMessageChange = (text) => {
//         const action = updateNewMessageTextActionCreator(text);
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     }
//
//     return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: () => {dispatch(addMessageActionCreator())},
        addMessage: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;