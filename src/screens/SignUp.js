import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../styles/SignUp.css';

const url = 'http://localhost:3001';

function SignUp() {
    const [user, setUser] = useState({ email: '', username: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
    };

    const handleUserNameChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, username: e.target.value }));
    };

    const handlePasswordChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (user.password !== confirmPassword) { // checking that passwords match
           console.error('Error passwords do not match');
           alert('Error passwords do not match');
           return; 
        }

        try {
            const json = JSON.stringify(user);
            const headers = {headers: {'Content-Type':'application/json'}};
            const response = await axios.post(url + '/user/register', json, headers); // attempting to post a new user

            if (response.status === 201) { // user added
               setUser({ email: '', username: '', password: '' });
               setConfirmPassword('');
               console.log('New user registered: ', response.data);
               navigate('/signin');
            } else {
               console.error('Error registration failed: ', response.data);
               alert('Error registration failed.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Server Error: ', error.response.data);
                alert('Server error occurred. A user with the same username or email might already exist.');
            } else if (error.request) {
                console.error('Network Error: ', error.request);
                alert('Network error occurred. Either the server is off or there is a problem with your internet connection');
            } else {
                console.error('Unexpected Error: ', error.message);
                alert('An unexpected error occurred.');
            }
        }
    };

    return(
        <div className='signUpPage'>
            <div className='mainContainer'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Input your email' 
                        value={user.email}
                        onChange={handleEmailChange}
                    />
                    <br/>

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

                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password' 
                        id='password'
                        name='password'
                        placeholder='Input your password' 
                        value={user.password}
                        onChange={handlePasswordChange}
                    />
                    <br/>

                    <label htmlFor='confirmPassword'>Re enter password: </label>
                    <input 
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Re enter your password' 
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <br/>
                    <button type='submit'>Confirm</button>
                    <br/>

                    <a href='./signin'>Already have an account?</a>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
