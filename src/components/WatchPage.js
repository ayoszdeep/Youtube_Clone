import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommnetsContainers from './CommnetsContainers';
import LiveChat from './LiveChat';
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get('v');

  return (
    <div className="items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-5xl px-4 mt-8">
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
          <iframe
            width="1000"
            height="550"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Merge Sort Using Recursion (Theory + Complexity + Code)"
            className="rounded-xl w-full max-w-[1000px] h-[550px] mb-8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          {/* Add video title, channel, or extra video details here for better UI */}
        </div>
        <div>
          <LiveChat />
        </div>
        <div className="p-6 mt-8 shadow-lg bg-slate-100 rounded-xl">
          <CommnetsContainers />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
