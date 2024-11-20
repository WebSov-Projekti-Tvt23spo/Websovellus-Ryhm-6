//import { useState } from 'react';
import './SignIn.css';

function SignIn() {
    return(
        <div className='signInPage'>
            <div className='mainContainer'>
                <h1>Sign in</h1>
                <form>
                    <label for='inputUsername'>User name: </label>
                    <input 
                        id='inputUsername'
                        placeholder='Input your username'
                    />
                    <br/>

                    <label for='inputPassword'>Password: </label>
                    <input 
                        id='inputPassword'
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
