// CommentsContainer.jsx

import React from 'react';
import { comments } from './Comments';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const CommentsData = ({ author, text, replies, timestamp, likes, dislikes }) => {
  return (
    <div className="flex items-start mb-5">
      <img
        className="h-9 w-9 rounded-full mt-1"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        alt="user-icon"
      />
      <div className="ml-4 flex-1">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
          <div className="flex items-center space-x-3 mb-1">
            <span className="font-semibold text-gray-900">{author}</span>
            <span className="text-xs text-gray-500">{timestamp}</span>
          </div>
          <div className="mb-2 text-gray-800">{text}</div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 text-base">
              <FaThumbsUp /> <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 text-base">
              <FaThumbsDown /> <span>{dislikes}</span>
            </button>
            <span className="text-gray-500 mx-2">&middot;</span>
            <span className="cursor-pointer font-medium text-sm text-gray-500 hover:text-gray-700">Reply</span>
          </div>
        </div>
        {replies && replies.length > 0 && (
          <div className="pl-8 mt-4 border-l-2 border-gray-100">
            <CommentsList data={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return (
    <>
      {data.map(comment => (
        <CommentsData key={comment.id} {...comment} />
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className=" max-w-6xl p-5">
      <h1 className="font-bold text-2xl mb-6">Comments Section</h1>
      <CommentsList data={comments} />
    </div>
  );
};

export default CommentsContainer;
