import React from 'react';

const Card = ({ data, toggleFavorite }) => {
  const { artist_name, song_name, image, added } = data;

  return (
    <div className='flex mt-4 shadow-md w-60 pb-10 relative rounded-lg p-2 items-center gap-5 hover:scale-105 transition-all bg-zinc-100'>
      <button
        onClick={toggleFavorite}
        className={`capitalize absolute bottom-[-10px] text-sm px-2 py-1 rounded-lg text-white left-[0%] ${added ? "bg-zinc-400 hover:bg-zinc-500" : "bg-purple-500 hover:bg-purple-600"}`}
      >
        {added ? "Added" : "Add To Favourite"}
      </button>
      <div className='h-12 w-12 bg-purple-500 overflow-hidden rounded-md'>
        <img src={image} className='object-cover h-12 w-12' />
      </div>
      <div>
        <h3 className='tracking-tighter text-lg font-semibold'>{song_name}</h3>
        <h6 className='text-zinc-500 tracking-tighter leading-none'>{artist_name}</h6>
      </div>
    </div>
  );
};

export default Card;
