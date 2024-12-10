import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignIn.css';

const url = 'http://localhost:3001';

function SignIn() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = async(e) => {
        const json = JSON.stringify(user);
        const headers = {headers: {'Content-Type':'application/json'}};
        e.preventDefault();
        try {
            await axios.post(url + '/user/login', json, headers);
        } catch (error) {
            throw error;
        }
    }

    return(
        <div className='signInPage'>
            <div className='mainContainer'>
                <h1>Sign in</h1>
                <form>
                    <label htmlFor='username'>User name: </label>
                    <input 
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Input your username'  
                    />
                    <br/>

                    <label htmlFor='inputPassword'>Password: </label>
                    <input 
                        type='password' 
                        id='password'
                        name='password'
                        placeholder='Input your password' 
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
