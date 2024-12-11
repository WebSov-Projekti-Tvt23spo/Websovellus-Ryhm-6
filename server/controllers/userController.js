import { insertUser, delUser, selectUserByUsername } from "../models/user.js";
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

const sign = jwt.sign;

const postRegistration = async (req,res,next) => {
    try {
        if(!req.body.username || req.body.username.length === 0) return next(new Error('Invalid username for User', 400));
        if(!req.body.email || req.body.email.length === 0) return next(new Error('Invalid email for User', 400));
        if(!req.body.password || req.body.password.length < 8) return next(new Error('Invalid password for User', 400));
        const hashedPassword = await hash(req.body.password, 10); // hashing password
        const userFromDb = await insertUser(req.body.username, req.body.email, hashedPassword); // creating new user with given parameters
        const user = userFromDb.rows[0]; // saving newly added info to user
        return res.status(201).json({
            userId: user.userId,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        return next(error);
    }
};

const postLogin = async (req,res,next) => {
    try {
        const userFromDb = await selectUserByUsername(req.body.username); // getting existing user by given username
        if(userFromDb.rowCount === 0) return next(new Error('Invalid credentials', 401));
        const user = userFromDb.rows[0]; // saving user's info from database

        // comparing the given password to the password from database
        if(!await compare(req.body.password, user.password)) 
           return next(new Error('Invalid crentials', 401));

        // creating a token based on the secret key in .env
        const token = sign(req.body.username, process.env.JWT_SECRET_KEY);

        return res.status(200).json({
            userId: user.userId,
            username: user.username,
            email: user.email,
            ...(token !== undefined) && {token:token} // only return token when defined
        });
    } catch (error) {
        return next(error);
    }
};

const deleteUser = async (req,res,next) => {
    try {
        const id = parseInt(req.params.id);
        if (!id) return next(new Error('Invalid id for User', 400));
        await delUser(id);
        return res.status(200).json({userId: id});
    } catch (error) {
        return next(error);
    }
};

export { postRegistration, postLogin, deleteUser };