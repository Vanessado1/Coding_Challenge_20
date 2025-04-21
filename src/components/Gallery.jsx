import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, selectedDestination, loading, error, setTours }) => {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  const handleRemoveTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="tour-card-container">
      {filteredTours.length === 0 ? (
        <div>
          <p>No tours left. Refresh to reload.</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      ) : (
        filteredTours.map((tour) => (
          <div key={tour.id}>
            <div className="tour-card">
              <img src={tour.image} alt={tour.name} />
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <p>Price: ${tour.price}</p>
              <button onClick={() => handleRemoveTour(tour.id)}>Not Interested</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
};

export default Gallery;
