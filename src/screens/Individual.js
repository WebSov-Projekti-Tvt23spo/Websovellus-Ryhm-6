import { useEffect, useState } from 'react';
import Header from "../components/Header";
import templateImage from './assets/template_image.jpg';
import '../styles/Individual.css';
import ReactPaginate from 'react-paginate';


function Individual() {
    const [userInput, setUserInput] = useState('');
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const Movies = () => {
        return (
            <table>
            {movies && movies.map(movie =>(
                <tr key={movie.id}><td>{movie.title}</td></tr>
            ))}
            </table>
        )
    }
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=' + page,{
            headers: {
                "Authorization": "",
                "Content-Type":"application/json"
            }
            }).then(response => response.json())
            .then(json => {
                setMovies(json.results)
                setPageCount(json.total_pages)
            })
            .catch(error => {
                console.log(error)
            })
    }, [page])

    return (
        <div className='individualPage'>
            <Header/>
            <div className='mainContainer'>
                <a href='./timetable'>Screening timetable</a>
                <h1>
                <Movies />
                </h1>
                <figure> 
                    <img src={templateImage}/>
                </figure>
                <aside>
                    <p>
                       
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
            <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
        </div>
    );
};

export default Individual;
