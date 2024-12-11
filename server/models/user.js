import { pool } from '../helpers/tietokanta.js';

const insertUser = async (username,email,password) => {
    return await pool.query('insert into "mydb"."User" ("username","email","password") values ($1,$2,$3) returning *',
                            [username,email,password]);
}

const selectUserByUsername = async (username) => {
    return await pool.query('select * from "mydb"."User" where "username" = $1', [username.trim()]);
}

const delUser = async (userId) => {
    return await pool.query('delete from "mydb"."User" where "userId" = $1', [userId]);
}

export { insertUser, selectUserByUsername, delUser };