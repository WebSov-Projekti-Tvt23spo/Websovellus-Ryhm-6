import { pool } from '../helpers/tietokanta.js';

const getMessages = async (groupId) => {
    const query = 'SELECT * FROM "mydb"."messages" WHERE group_id = $1 ORDER BY timestamp ASC'
    const result = await pool.query(query, [groupId])
    return result.rows
}

const createMessage = async (groupId, username, text) => {
    const query = 'insert into "mydb"."messages" (group_id, username, text) values ($1, $2, $3) returning *'
    const result = await pool.query(query, [groupId, username, text])
    return result.rows[0]
}

export { createMessage, getMessages };