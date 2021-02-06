import React, { useState } from 'react'

const CreatePost = ({ user, posts, setPosts }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleCreate = () => {
        const newPost = { title, content, author: user }
        setPosts([...posts, newPost])
    }
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate() }}>
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
