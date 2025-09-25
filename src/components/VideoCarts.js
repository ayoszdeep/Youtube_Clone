import React from 'react';

const VideoCarts = ({ info }) => {
  const { statistics, snippet, contentDetails } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[300px] flex flex-col items-center hover:scale-105 transition-transform">
      <img
        className="rounded-lg w-full h-44 object-cover mb-3"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <ul className="text-sm text-gray-700 mb-1 w-full">
        <li className="mb-1">{channelTitle}</li>
        <li className="mb-1">{statistics?.viewCount} views</li>
        <li>{contentDetails?.definition}</li>
      </ul>
    </div>
  );
};

export default VideoCarts;
