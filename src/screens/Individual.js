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
    const [query, setQuery] = useState("");
    const [selectedMovieImage, setSelectedMovieImage] = useState('');

    const Movies = () => {
        return (
            <table>
                {movies && movies.map(movie => (
                    <tr key={movie.id} onClick={() => setSelectedMovieImage(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)}>
                        <td>{movie.title}</td>
                        <td>

                        </td>
                    </tr>
                ))}
            </table>
        )
    }

    const search = () => {
        fetch('https://api.themoviedb.org/3/search/movie?query=' + query + '%20wars&include_adult=false&language=en-US&page=' + page,{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGRiNGY4NDVhZTFmNTg2MGY3ZTRiY2U5NmIyMjJkMSIsIm5iZiI6MTczMzk0NjEwMi4xNTI5OTk5LCJzdWIiOiI2NzU5ZWFmNjVmNGQzYWEzYzc0Y2MwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.szwvqguHDlsZG6Z_GpKCPkENdJmYWBQaRxUmRMbedIw",
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
    }

    useEffect(() => {
        search()
    }, [page])

    return (
        <div className='individualPage'>
            <Header/>
            <div className='mainContainer'>
                <a href='./timetable'>Screening timetable</a>
                <h1>
                Movies
                </h1>
                <figure> 
                <img src={selectedMovieImage || 'https://via.placeholder.com/500'} alt="Selected Movie" />
                </figure>
                <aside>
                    <p>
                    <input value={query} onChange={e => setQuery(e.target.value)}></input><button onClick={search} type="button">Search</button>
                    </p>
                    <p>
                    <Movies />
                    </p>
                    <p>
                    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
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
                        
                    </p>
                    <p>
                        
                    </p>
                    <p>

                    </p>
                </div>
            </div>
           
        </div>
    );
};

export default Individual;
