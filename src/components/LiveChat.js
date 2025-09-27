import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName, generateRandomMessage } from '../utils/helper';


const ChatMessages = ({ name, message }) => (
  <div className='flex items-center gap-2 p-2 m-2 border border-gray-300 rounded-lg shadow-lg'>
    <img
      src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
      alt="profile"
      className="rounded-full w-7 h-7"
    />
    <span className='px-2 font-bold'>{name}</span>
    <span>{message}</span>
  </div>
);


const LiveChat = () => {
  const [liveReply, setLiveReply] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const chat = setInterval(() => {
      dispatch(addMessage({
        name: generateName(),
        message: generateRandomMessage(),
      }));
    }, 1500);

    return () => clearInterval(chat);
  }, [dispatch]);

  return (
    <>
      <div className='w-full h-[550px] ml-2 p-2 border border-black overflow-y-scroll flex-col-reverse'>
        <p className='text-lg font-bold'>Chat Messages</p>
        {messages.map((c, index) => (
          <ChatMessages
            key={index}
            name={c.name}
            message={c.message}
          />
        ))}
      </div>
      <form  className='flex' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "AyoszDeep",
          message: liveReply
        }));
        setLiveReply(""); 
      }}>
        <input className='w-full h-10 bg-gray-100 text-black' type='text' placeholder='type here live chat'
          value={liveReply} onChange={(e) => {
            setLiveReply(e.target.value);
          }} />
        <button className='bg-red-500 border border-black rounded-lg w-fit px-3'>SEND</button>
      </form>
    </>
  );
};

export default LiveChat;
