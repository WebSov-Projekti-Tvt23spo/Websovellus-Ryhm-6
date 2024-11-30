import { selectAllMovies, insertMovie,delMovie } from "../models/movie";

const getMovies = async (req,res,next) => {
    try {
        const result = await selectAllMovies();
        return res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
};

const postMovie = async (req,res,next) => {
    try {
        if (!req.body.movieTitle || req.body.movieTitle.length === 0) return next(new Error('Invalid movieTitle for movie', 400));
        if (!req.body.releaseDate || req.body.releaseDate.length === 0) return next(new Error('Invalid releaseDate for movie', 400));
        if (!req.body.movieGenre || req.body.movieGenre.length === 0) return next(new Error('Invalid movieGenre for movie', 400));
        if (!req.body.movieDescription || req.body.movieDescription.length === 0) return next(new Error('Invalid movieDescription for movie', 400));
        if (!req.body.screeningTime || req.body.screeningTime.length === 0) return next(new Error('Invalid screeningTime for movie', 400));
        const result = await insertMovie(req.body.movieTitle, req.body.releaseDate, req.body.movieGenre, req.body.movieDescription, req.body.screeningTime);
        return res.status(201).json({
            movieId: result.rows[0].movieId, 
            movieTitle: result.rows[0].movieTitle,
            releaseDate: result.rows[0].releaseDate,
            movieGenre: result.rows[0].movieGenre,
            movieDescription: result.rows[0].movieDescription,
            screeningTime: result.rows[0].screeningTime
        });
    } catch (error) {
        return next(error);
    }
};

const deleteMovie = async (req,res,next) => {
    try {
        const id = parseInt(req.params.id);
        if (!id) return next(new Error('Invalid id for movie', 400));
        await delMovie(id);
        return res.status(200).json({movieId: id});
    } catch (error) {
        return next(error);
    }
};

export { getMovies, postMovie, deleteMovie };