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
  "Movies",
  "News",
  "Live",
  "Cooking"
];

const ButtonList = () => (
  <div className="flex gap-3 p-8 m-2 border border-gray-300 overflow-x-auto bg-white">
    {buttonList.map((name) => (
      <Button name={name} key={name} />
    ))}
  </div>
);

export default ButtonList;
