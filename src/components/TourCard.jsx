import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-details">
                <h2>{name}</h2>
                <p>{info}</p>
                <h3>${price}</h3>
                <button onClick={() => onRemove(id)} className="not-interested-btn">
                    Not Interested
                </button>
            </div>
        </div>
    );
};

const TourList = ({ tours }) => {
    const [tourList, setTourList] = useState(tours);

    const handleRemove = (id) => {
        setTourList(tourList.filter((tour) => tour.id !== id));
    };

    return (
        <div className="tour-list">
            {tourList.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default TourList;