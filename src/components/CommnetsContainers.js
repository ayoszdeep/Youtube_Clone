import React from 'react';
import { comments } from './Comments';

const CommentsData = ({ author, text, replies }) => {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <img
        className="h-8 w-8 rounded-full"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        alt="user-icon"
      />
      <div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <span className="font-bold">{author}</span>
          <span className="px-2">{text}</span>
        </div>
        {replies && replies.length > 0 && (
          <div className="pl-6 border-l-2 border-gray-200 mt-2">
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
    <div className="m-2 p-2">
      <h1 className="font-bold text-2xl mb-4">Comments Section</h1>
      <CommentsList data={comments} />
    </div>
  );
};

export default CommentsContainer;
