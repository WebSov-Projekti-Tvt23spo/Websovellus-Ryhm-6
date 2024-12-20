import { pool } from '../helpers/tietokanta.js';

const selectAllMovies = async () => {
    return await pool.query('select * from "mydb"."Movies"');
}

const insertMovie = async (movieTitle,releaseDate,movieGenre,movieDescription,screeningTime) => {
    return await pool.query('insert into "mydb"."Movies" (movieTitle,releaseDate,movieGenre,movieDescription,screeningTime) values ($1,$2,$3,$4,$5) returning *', 
                            [movieTitle,releaseDate,movieGenre,movieDescription,screeningTime]);
}

const delMovie = async (id) => {
    return await pool.query('delete from "mydb"."Movies" where id = $1', [id]);
}

export { selectAllMovies, insertMovie, delMovie };