import Header from "../helpers/Header";
import templateImage from './assets/template_image.jpg';
import './Group.css';

function Group() {
    return (
        <div className='groupPage'>
            <Header/>
            <div className='mainContainer'>
                <h1>Group</h1>
                <figure>
                    <img src={templateImage}/>
                </figure>
            </div>
        </div>
    ); 
};

export default Group;