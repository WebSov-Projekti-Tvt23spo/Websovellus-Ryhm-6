import { pool } from '../helpers/tietokanta.js';

const insertUser = async (username,email,password) => {
    return await pool.query('insert into "mydb"."User" (username,email,password) values ($1,$2,$3) returning *',
                            [username,email,password]);
}

const selectUserByEmail = async (email) => {
    return await pool.query('select * from "mydb"."User" where email=$1', [email]);
}

const delUser = async (id) => {
    return await pool.query('delete from "mydb"."User" where id = $1', [id]);
}

export { insertUser, selectUserByEmail, delUser };