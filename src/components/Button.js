import React from 'react';

const Button = ({ name }) => (
  <button
    className="px-5 py-2 rounded-full bg-gray-100 text-gray-800 font-semibold shadow-sm
      hover:bg-gray-200 hover:text-blue-600
      active:bg-gray-300 transition-colors duration-150
      whitespace-nowrap"
  >
    {name}
  </button>
);

export default Button;
