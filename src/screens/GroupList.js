import React, { useState, useEffect } from 'react'
import { getGroups } from '../helpers/groupData'
import '../styles/GroupList.css'
import Header from "../helpers/Header"

function GroupList() {
    const [groups, setGroups] = useState([])

    //Debug function to delete created groups
    const clearLocalStorage = () => {
        localStorage.clear()
    }

    useEffect(() => {
        const currentGroups = getGroups()
        setGroups(currentGroups)
    }, []);

    return (
        <div className='groupList'>
            <Header />

            <div className='myHeader'>
                <a href='./createGroup'>Create a group</a>
                <button onClick={clearLocalStorage}>Clear local storage</button>

                <h1>Your groups</h1>
                <div className='groupContainer'>
                    {groups.map(group => (
                        <div key={group.id} className='groupItem'>
                            <img src={group.image} alt={`${group.name} icon`} />
                            <h2>{group.name}</h2>
                            <p>{group.description}</p>
                            <a href='./group'>Join group chat</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GroupList;
