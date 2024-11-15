import { useState } from 'react';

export default function Header() {
    const [search, setSearch] = useState('');

    return ( 
        <div className='headerContainer'>
            <a href='./'>Return</a>
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