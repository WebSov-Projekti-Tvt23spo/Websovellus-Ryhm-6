import { useState } from 'react';

export default function HomeHeader() {
    const [user, setUser] = useState('*insert name*');
    const [search, setSearch] = useState('');

    return ( 
        <div className='headerContainer'>
            <h1>Welcome {user} </h1>
            <form>
                <input 
                    placeholder='Search'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            setSearch('');
                        }    
                    }}
                />
            </form>
            <a href='./signin'>Sign Out</a>
        </div>
    );
};