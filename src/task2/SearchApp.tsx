import React from 'react';
import type { User } from './types';
import UserCard from './UserCard';

const INITIAL_DATA: User[] = [
    { id: 1, name: 'Valentin', email: 'valentin@gmail.com', age: 19 },
    { id: 2, name: 'Erzhan', email: 'erzh2@gmail.com', age: 30 },
];

const SearchApp = () => {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<User[]>([]);

    const handleSearch = () => {
        const filtered = INITIAL_DATA.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <h1>User Search</h1>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search by name..."
            />
            <button onClick={handleSearch}>Search</button>
            <div style={{ marginTop: '1rem' }}>
                {results.map(user => (
                    <UserCard key={user.id} user={user}>
                        {/* You can add additional content here if needed */}
                    </UserCard>
                ))}
            </div>
        </div>
    );
};

export default SearchApp;

    