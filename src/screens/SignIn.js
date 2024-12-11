import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../styles/SignIn.css';

const url = 'http://localhost:3001';

function SignIn() {
    const [user, setUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, username: e.target.value }));
    };

    const handlePasswordChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const json = JSON.stringify(user);
            const headers = {headers: {'Content-Type':'application/json'}};
            const response = await axios.post(url + '/user/login', json, headers);

            if (response.status === 200) { // username and password match
                setUser({ username: '', password: '' });
                console.log('Login was successful: ', response.data);
                navigate('/');
            } else {
                console.error('Error login failed: ', response.data);
                alert('Invalid credentials.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Server Error: ', error.response.data);
                alert('Server error occurred.');
            } else if (error.request) {
                console.error('Network Error: ', error.request);
                alert('Network error occurred. Either the server is off or there is a problem with your internet connection');
            } else {
                console.error('Unexpected Error: ', error.message);
                alert('An unexpected error occurred.');
            }
        }
    }

    return(
        <div className='signInPage'>
            <div className='mainContainer'>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>User name: </label>
                    <input 
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Input your username'  
                        value={user.username}
                        onChange={handleUserNameChange}
                    />
                    <br/>

                    <label htmlFor='inputPassword'>Password: </label>
                    <input 
                        type='password' 
                        id='password'
                        name='password'
                        placeholder='Input your password'
                        value={user.password}
                        onChange={handlePasswordChange} 
                    />
                    <br/>

                    <button type='submit'>Confirm</button>
                    <br/>

                    <a href='./signup'>Don't have an account?</a>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
