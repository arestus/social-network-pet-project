import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



export default store;
window.store = store;