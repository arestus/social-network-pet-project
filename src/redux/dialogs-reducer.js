import sidebarReducer from "./sidebar-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    messages: [
        {id: 1, message: 'hi!'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'where are you?'},
        {id: 4, message: 'my name is'},
        {id: 5, message: 'some of them'},
        {id: 6, message: 'good'},
        {id: 7, message: 'got it'}
    ],
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Larisa'},
        {id: 2, name: 'Dmitriy'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Ira'},
        {id: 6, name: 'Tanya'},
        {id: 7, name: 'Julia'}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 8,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text,})

export default dialogsReducer