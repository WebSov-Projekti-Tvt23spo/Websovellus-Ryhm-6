import { useState } from "react";
import axios from "axios";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [site, setSite] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:3000/api/searchbar", {
                params: {query, site},
            });
            setResults(response.data);
        } catch (error) {
            console.error("Error getting search results:", error);
        }
    };

    return(
        <div id="searchbar">
            <form onSubmit={handleSearch}>
                <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Searchbar;