import React from 'react';
import Card from './Card';

const Cards = ({ data, handleToggleFavorite }) => {
  return (
    <div className='p-10 flex flex-wrap gap-10 justify-center'>
      {data.map((song, index) => (
        <Card
          data={song}
          key={index}
          index={index}
          toggleFavorite={() => handleToggleFavorite(index)}
        />
      ))}
    </div>
  );
};

export default Cards;
