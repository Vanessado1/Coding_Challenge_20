import React from "react";

const DestinationSelector = ({ tours, onFilter }) => {
  const uniqueDestinations = ["All Destinations", ...new Set(tours.map((tour) => tour.name))];

  const handleChange = (event) => {
    const value = event.target.value;
    onFilter(value === "All Destinations" ? "" : value);
  };

  return (
    <select onChange={handleChange}>
      {uniqueDestinations.map((destination, index) => (
        <option key={index} value={destination}>
          {destination}
        </option>
      ))}
    </select>
  );
};

export default DestinationSelector;
