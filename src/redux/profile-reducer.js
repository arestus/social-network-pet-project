const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 8,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default profileReducer