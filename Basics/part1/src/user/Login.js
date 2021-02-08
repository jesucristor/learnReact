import React, { useState } from 'react'


const Login = ({ dispatch }) => {
    const [username, setUsername] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'LOGIN', username }) }}>
                <label htmlFor='login-username'>Username:</label>
                <input type='text' name='login-username' id='login-username' onChange={handleUsername} />
                <label htmlFor='login-password'>Password:</label>
                <input type='password' name='login-password' id='login-password' />
                <input type='submit' value='Login' disabled={username.length === 0} />
            </form>
        </div>
    )
}

export default Login
