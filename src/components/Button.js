import React from 'react';

const Button = ({ name }) => (
  <button
    className="bg-slate-600 text-white px-6  py-1 rounded-full mx-1 shadow hover:bg-slate-700 transition-colors duration-150"
  >
    {name}
  </button>
);

export default Button;
