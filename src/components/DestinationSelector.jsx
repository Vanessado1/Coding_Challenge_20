import React from "react";

const DestinationSelector = ({ tours, onFilter }) => {
  // Extract unique destinations, including "All Destinations"
  const uniqueDestinations = ["All Destinations", ...new Set(tours.map((tour) => tour.name))];

  const handleChange = (event) => {
    const value = event.target.value;
    onFilter(value === "All Destinations" ? "" : value); // Filter tours based on selection
  };

  return (
    <div className="destination-selector">
      <label htmlFor="destination-dropdown">Choose a Tour Destination:</label>
      <select
        id="destination-dropdown"
        onChange={handleChange}
        className="dropdown-menu"
      >
        {uniqueDestinations.map((destination, index) => (
          <option key={index} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
