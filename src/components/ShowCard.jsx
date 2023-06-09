import React from 'react';

const ShowCard = ({ show }) => {
  const { name, image } = show;
  

  return (
    <div className="show-card">
      <img src={image?.medium} alt={name} />
      <h3>{name}</h3>

    
    </div>
  );
};

export default ShowCard;
