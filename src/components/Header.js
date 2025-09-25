import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-cols-12 items-center w-full bg-white px-4 py-2 shadow-xl">
      {/* Logo and Icon - left-aligned */}
      <div className="flex items-center col-span-2 gap-2">
        <img 
          onClick={toggleMenuHandler} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqr08x3BvziNsROn0qQITqpfPWXL0ORIBkPQ&s" 
          alt="menu icon" 
          className="h-5 cursor-pointer" 
        />
        <a href='/'>
          <img src="/YouTube-Logo-PNG7.png" alt="YouTube logo" className="h-12 px-3 cursor-pointer" />
        </a>
      </div>
      {/* Search bar - centered */}
      <div className="col-span-9 flex justify-center items-center">
        <input 
          type="text" 
          placeholder="Search" 
          className="border rounded-l-full px-3 py-1 outline-none w-fit" 
        />
        <button className="bg-red-600 text-white px-4 py-1 rounded-r-full w-24 shadow-md">
          Search
        </button>
      </div>
      {/* Profile - right-aligned */}
      <div className="flex justify-end items-center col-span-1">
        <img 
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" 
          alt="profile" 
          className="h-12 w-12 rounded-full" 
        />
      </div>
    </div>
  );
}

export default Header;
