import React from 'react';
import Button from './Button';

const buttonList = [
  "All",
  "Music",
  "Cricket",
  "Movies",
  "News",
  "Live",
  "Cooking",
  "Gaming",
  "Tech",
  "Travel",
  "Education",
  "Podcasts"
];

const ButtonList = () => (
  <div className="flex gap-3 px-5 py-3 border-b border-gray-100 overflow-x-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    {buttonList.map((name, idx) => (
      <Button name={name} key={`${name}-${idx}`} />
    ))}
  </div>
);

export default ButtonList;
