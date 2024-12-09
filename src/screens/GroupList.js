import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/GroupList.css'
import Header from "../components/Header.js"

const url = 'http://localhost:3001'

function GroupList() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        //const currentGroups = getGroups()
        //setGroups(currentGroups)

        axios.get(url + '/getGroups')
        .then(response => {
            setGroups(response.data)
        }).catch(error => {
            alert(error.response.data.error ? error.response.data.error : error)
        })
    }, []);

    return (
        <div className='groupList'>
            <Header />

            <div className='myHeader'>
                <a href='./createGroup'>Create a group</a>
                <h1>Your groups</h1>
                <div className='groupContainer'>
                    {groups.map(group => (
                        <div key={group.id} className='groupItem'>
                            <img src={group.groupimage} alt={`${group.name} icon`} />
                            <h2>{group.groupname}</h2>
                            <p>{group.groupdescription}</p>
                            <Link to={`/group/${group.id}`}>Join group chat</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GroupList;
