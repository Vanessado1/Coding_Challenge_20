import React from "react";

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{info}</p>
      <p>Price: ${price}</p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
};

export default TourCard;
