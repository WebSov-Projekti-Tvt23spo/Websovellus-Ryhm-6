import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from '../searchbar/searchbar';

export default function Header() {
    const [user, setUser] = useState('*insert name*');
    const [search, setSearch] = useState('');
    const url = useLocation();

    const renderHeaderByUrl = () => {
        if (url.pathname === '/') {
            return <h1>Welcome {user}</h1>;
        } else {
            return <a href='./'>Return</a>;
        };
    };

    return ( 
        <div className='headerContainer'>
            {renderHeaderByUrl()}
            <Searchbar/>
            <a href='./signin'>Sign Out</a>
        </div>
    );
};