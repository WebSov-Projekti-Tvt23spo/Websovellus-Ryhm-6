import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [user, setUser] = useState('*insert name*');
    const [search, setSearch] = useState('');
    const url = useLocation();

    const renderHeaderByUrl = () => {
        if (url.pathname === '/') {
            return <h1>Welcome {user}</h1>;
        } else {
            return <a href='./'>Return</a>;
        }
    }

    const transportSearch = () => {
        const s = search;
        setSearch('');
        console.log('Returning value for search: \'' + s + '\'');
        return s;
    };

    return ( 
        <div className='headerContainer'>
            {renderHeaderByUrl()}
            <form>
                <input 
                    placeholder='Search'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            transportSearch();
                        }    
                    }}
                />
            </form>
            <a href='./signin'>Sign Out</a>
        </div>
    );
};