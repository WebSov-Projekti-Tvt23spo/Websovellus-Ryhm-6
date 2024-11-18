import Header from "../helpers/Header";
import templateImage from './assets/template_image.jpg';
import './Timetable.css';

function Timetable() {
    return (
        <div className='timetablePage'>
            <Header/>
            <div className='mainContainer'>
                <h1>Screening Schedule</h1>
                <figure>
                    <img src={templateImage}/>
                </figure>
                <div className='calendarContainer'>
                    <input type='date' id='calendar'/>
                    <input type='button' value='Confirm' id='confirmButton'/>
                </div>
            </div>
        </div>
    );
};

export default Timetable;