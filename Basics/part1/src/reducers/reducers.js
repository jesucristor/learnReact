const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            console.log(action);
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

const postReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            const newPost = { title: action.title, content: action.content, author: action.author }
            return [...state, newPost]
        default:
            return state
    }
}

export default (state, action) => {
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action)
    }
}

