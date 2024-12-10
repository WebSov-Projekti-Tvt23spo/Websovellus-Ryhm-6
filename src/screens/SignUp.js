import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';

const url = 'http://localhost:3001';

function SignUp() {
    const [user, setUser] = useState({ email: '', username: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');

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

        if (user.password !== confirmPassword) {
           console.error('Error passwords do not match');
           alert('Error passwords do not match');
           return; 
        }

        try {
            const json = JSON.stringify(user);
            const headers = {headers: {'Content-Type':'application/json'}};
            const response = await axios.post(url + '/user/register', json, headers);
            if (response.status === 200) {
               setUser({ email: '', username: '', password: '' });
               setConfirmPassword('');
               console.log('New user registred: ', response.data);
            } else {
               console.error('Error registration failed: ', response.data);
               alert(response.data);
            }
        } catch (error) {
            throw error;
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
                        onChange={handleEmailChange}
                    />
                    <br/>

                    <label htmlFor='username'>User name: </label>
                    <input 
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Input your username' 
                        onChange={handleUserNameChange}
                    />
                    <br/>

                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password' 
                        id='password'
                        name='password'
                        placeholder='Input your password' 
                        onChange={handlePasswordChange}
                    />
                    <br/>

                    <label htmlFor='confirmPassword'>Re enter password: </label>
                    <input 
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Re enter your password' 
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
