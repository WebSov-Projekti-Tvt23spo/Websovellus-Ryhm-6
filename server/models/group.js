import { pool } from '../helpers/tietokanta.js';

const getGroups = async() => {
    const query = 'select * from "group"'
    const result = await pool.query(query)
    return result.rows
}

const getGroup = async( groupId ) => {
    const query = 'select * from "group" where id = $1'
    const result = await pool.query(query, [groupId])
    return result.rows[0]
}

const createGroup = async( groupName, groupDescription, groupImage, owner) => {
    const query = 'insert into "group" (groupName, groupDescription, groupImage, owner) values ($1, $2, $3, $4) returning *'
    const result = await pool.query(query, [groupName, groupDescription, groupImage, owner])
    return result.rows[0].id
}

const deleteGroup = async( groupId ) => {
    const query = 'delete from "group" where id = $1'
    const result = await pool.query(query, [groupId])
    return result.rows
}

export { getGroups, getGroup, createGroup, deleteGroup };