import { Router } from 'express';
import { getMovies, postMovie, deleteMovie } from '../controllers/movieController.js';

const movieRouter = Router();

movieRouter.get('/', getMovies);
movieRouter.post('/create', postMovie);
movieRouter.delete('/delete/:id', deleteMovie);

export default movieRouter;