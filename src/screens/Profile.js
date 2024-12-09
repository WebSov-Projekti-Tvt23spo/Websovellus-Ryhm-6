import Header from "../components/Header";
import templateImage from './assets/template_image.jpg';
import '../styles/Profile.css';

function Profile() {
    return (
        <div className='profilePage'>
            <Header/>
            <div className='mainContainer'>
                <figure>
                    <a href='./settings'>Settings</a>
                    <img src={templateImage}/>
                    <a href='./delete'>Delete your account</a>
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
            </div>
        </div>
    );
};

export default Profile;