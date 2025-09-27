import React, { useState, useEffect } from 'react';
import { YOU_API } from '../utils/constants';
import VideoCarts from './VideoCarts';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      const data = await fetch(YOU_API);
      const json = await data.json();
      setVideoData(json.items || []);
    };
    getVideoData();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {videoData.length === 0 ? (
        <div className="text-xl text-gray-500 text-center mt-24">Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {videoData.map((video) => (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <div className="transition duration-150 hover:scale-105">
                <VideoCarts info={video} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
