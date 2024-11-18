import { useState } from 'react';
import Header from "../helpers/Header";
import templateImage from './assets/template_image.jpg';
import './Individual.css';

function Individual() {
    const [userInput, setUserInput] = useState('');

    return (
        <div className='individualPage'>
            <Header/>
            <div className='mainContainer'>
                <a href='./timetable'>Screening timetable</a>
                <h1>Title</h1>
                <figure> 
                    <img src={templateImage}/>
                </figure>
                <aside>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                </aside>
                <form>
                    <textarea
                        placeholder='Type here'
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setUserInput('');
                            }    
                        }}
                    />
                </form>
                <div id='bottomText'>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                    <p>
                       Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class arcu egestas morbi, 
                       faucibus dictum porta egestas. Lobortis finibus dictumst adipiscing nisl porttitor at 
                       sit ut potenti. Cursus euismod sagittis volutpat ut volutpat aliquam. Mus penatibus 
                       hendrerit orci ullamcorper eros dolor neque. Gravida egestas mus turpis integer quisque 
                       commodo? Ullamcorper amet quis nunc id iaculis litora porta ipsum aptent. Litora porttitor 
                       torquent a fermentum dignissim morbi magnis habitasse.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Individual;