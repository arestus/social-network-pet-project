import {rerenderEntireThree} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi!', likes: 12},
            {id: 2, message: 'how are you?', likes: 13},
            {id: 3, message: 'where are you?', likes: 4},
            {id: 4, message: 'my name is', likes: 0},
            {id: 5, message: 'some of them', likes: 44},
            {id: 6, message: 'good', likes: 111},
            {id: 7, message: 'got it', likes: 1111}
        ]
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
}
export const addNewPost = (postMessage) => {
    const newPost = {
        id:8,
        message: postMessage,
        likes:0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state)
}

export default state;