import React from "react"; // import react 

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{info}</p>
      <p>Price: ${price}</p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
  
};

export default TourCard;
