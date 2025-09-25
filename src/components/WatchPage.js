import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get('v');

  return (
    <div>
     <iframe width="1100"
      height="700" 
      src={"https://www.youtube.com/embed/"+videoId }
      title="Merge Sort Using Recursion (Theory + Complexity + Code)" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default WatchPage;
