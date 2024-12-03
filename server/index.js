import express from 'express';
import dotenv from 'dotenv';
import movieRouter from './routers/movieRouter';
import userRouter from './routers/userRouter';

dotenv.config(); // adding contents of .env to process.env

const port = process.env.PORT; // gets port from env file
const app = express();
app.use(express.json()); // allows client to send json data
app.use(express.urlencoded({extended: false})); // use curl through url

/* these have yet to be implemented
app.use(cors()); // allows testing from different origin
*/

app.use('/', movieRouter);
app.use('/user', userRouter);

app.use((err,res) => { // error handling
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({error: err.message});
});

app.listen(port);