import React from 'react';

const Navbar = ({ favoriteCount }) => {
  return (
    <div className='p-6 text-xl flex justify-around items-center'>
      <h1 className='font-semibold text-purple-500'>Shine</h1>
      <ul className='flex gap-6'>
        <li>All Songs</li>
        <li className='text-purple-500'>Favorites <span className='text-black bg-purple-500 h-7 w-5 p-2 px-4 rounded-full'>{favoriteCount}</span></li>
      </ul>
    </div>
  );
};

export default Navbar;
