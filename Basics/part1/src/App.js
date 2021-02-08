import React, { useState, useReducer } from 'react'
import UserBar from './user/UserBar';
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      console.log(action);
      return action.username
    case 'LOGOUT':
      return ''
    default:
      throw new Error()
  }
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      const newState = { title: action.title, content: action.content, author: action.author }
      return [...state, newState]
    default:
      throw new Error()
  }
}

const App = () => {
  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, dispatchPosts] = useReducer(postReducer, defaultPosts)
  console.log(user);
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {
        user && <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />
      }
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )

}


export default App;
