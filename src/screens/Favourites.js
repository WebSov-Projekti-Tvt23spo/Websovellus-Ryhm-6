import Header from "../helpers/Header";
import templateImage from './assets/template_image.jpg';
import './Favourites.css';

function Favourites() {
    return (
        <div className='favouritesPage'>
            <Header/>
            <div className='mainContainer'>
                <h1>Favourites</h1>
                <figure id='leftFigure'>
                    <img src={templateImage}/>
                    <figcaption>Title</figcaption>
                </figure>
                <figure id='rightFigure'>
                    <img src={templateImage}/>
                </figure>
            </div>
        </div>
    );
};

export default Favourites;