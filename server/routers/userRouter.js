import { Router } from 'express';
import { postRegistration, postLogin, deleteUser } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/register', postRegistration);
userRouter.post('/login', postLogin);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;