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
    <div>
      {filteredTours.length === 0 ? (
        <div>
          <p>No tours left. Refresh to reload.</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      ) : (
        filteredTours.map((tour) => (
          <TourCard key={tour.id} {...tour} removeTour={handleRemoveTour} />
        ))
      )}
    </div>
  );
};

export default Gallery;
