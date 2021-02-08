import React, { useState, useContext } from 'react'
import { StateContext } from '../context'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { state, dispatch } = useContext(StateContext)
    const { user } = state
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }


    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'CREATE_POST', title, content, author: user }) }}>
                <div>Author: <b>{user}</b></div>
                <div>
                    <label htmlFor='create-title'>Title:</label>
                    <input type='text' name='create-title' id='create-title' value={title} onChange={handleTitle} />
                </div>
                <textarea value={content} onChange={handleContent} />
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}

export default CreatePost
