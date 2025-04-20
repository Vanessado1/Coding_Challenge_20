import React, { useState, useEffect } from 'react';
import TourList from './TourList'; // Example child component
import Filter from './Filter'; // Example child component

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }
                const data = await response.json();
                setTours(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const filteredTours = tours.filter((tour) =>
        tour.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <TourList tours={filteredTours} />}
        </div>
    );
};

export default App;