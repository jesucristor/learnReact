import React, { useState } from 'react'

const Register = ({ dispatch }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value)
    }
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'REGISTER', username }) }}>
                <label htmlFor='register-username'>Username:</label>
                <input type='text' name='register-username' id='register-username' value={username} onChange={handleUsername} />
                <label htmlFor='register-password'>Password:</label>
                <input type='password' name='register-password' id='register-password' value={password} onChange={handlePassword} />
                <label htmlFor='register-repeat-password'>Repeat Password:</label>
                <input type='password' name='register-repeat-password' id='register-repeat-password' value={passwordRepeat} onChange={handlePasswordRepeat} />
                <input type='submit' value='Register' disabled={username.length === 0 || password.length === 0 || passwordRepeat.length === 0} />
            </form>
        </div>
    )
}

export default Register
