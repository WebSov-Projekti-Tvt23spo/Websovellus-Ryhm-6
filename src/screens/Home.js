import HomeHeader from '../helpers/HomeHeader';
import templateImage from './assets/template_image.jpg';
import './Home.css';

function Home() {
    return (
        <div className='homePage'>
            <HomeHeader/>
            <div className='mainContainer'>
                <div className='firstColumn'>
                    <figure>
                        <img src={templateImage}/>
                        <figcaption>Title</figcaption>
                    </figure>
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
                <div className='secondColumn'>
                    <figure>
                        <img src={templateImage}/>
                    </figure>
                </div>
                <div className='thirdColumn'>
                    <figure>
                        <a href='./group'>Your group</a>
                        <img src={templateImage}/>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Home;
