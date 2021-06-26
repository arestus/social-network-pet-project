const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi!', likes: 12},
                {id: 2, message: 'how are you?', likes: 13},
                {id: 3, message: 'where are you?', likes: 4},
                {id: 4, message: 'my name is', likes: 0},
                {id: 5, message: 'some of them', likes: 44},
                {id: 6, message: 'good', likes: 111},
                {id: 7, message: 'got it', likes: 1111}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi!'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'where are you?'},
                {id: 4, message: 'my name is'},
                {id: 5, message: 'some of them'},
                {id: 6, message: 'good'},
                {id: 7, message: 'got it'}
            ],
            newMessageText: 'Write here something to start',
            dialogs: [
                {id: 1, name: 'Larisa'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Anya'},
                {id: 5, name: 'Ira'},
                {id: 6, name: 'Tanya'},
                {id: 7, name: 'Julia'}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Larisa'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Alex'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addNewPost() {
        const newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    addNewMessage() {
        const newMessage = {
            id: 8,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 8,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 8,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type ===  UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text,})

export default store;
window.store = store;