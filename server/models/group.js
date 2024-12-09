import { pool } from '../helpers/tietokanta.js';

const getGroups = async() => {
    const query = 'select * from "mydb"."Group"';
    const result = await pool.query(query);
    return result.rows;
}

const getGroup = async(idGroup) => {
    const query = 'select * from "mydb"."Group" where "idGroup" = $1';
    const result = await pool.query(query, [idGroup]);
    return result.rows[0];
}

const createGroup = async(groupName, groupDescription, groupImage, owner) => {
    const query = 'insert into "mydb"."Group" ("groupName", "groupDescription", "groupImage", "owner") values ($1, $2, $3, $4) returning *';
    const result = await pool.query(query, [groupName, groupDescription, groupImage, owner]);
    return result.rows[0].idGroup;
}

const deleteGroup = async(idGroup) => {
    const query = 'delete from "mydb"."Group" where "idGroup" = $1';
    const result = await pool.query(query, [idGroup]);
    return result.rows;
}

export { getGroups, getGroup, createGroup, deleteGroup };