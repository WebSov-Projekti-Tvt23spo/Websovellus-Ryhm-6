import './SignUp.css';

function SignUp() {
    return(
        <div className='signUpPage'>
            <div className='mainContainer'>
                <h1>Sign up</h1>
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

                    <label for='inputRePassword'>Re enter password: </label>
                    <input 
                        id='inputRePassword'
                        placeholder='Re enter your password' 
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
