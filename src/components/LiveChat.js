import React, { useEffect } from 'react';

const ChatMessages = ({name,message}) => {
  return (
    <div  > 
        <div>
           
        </div>
    <div className='flex items-center gap-2 p-2 m-2 border border-gray-300 rounded-lg shadow-lg'>
        <img
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
          alt="profile"
          className="rounded-full w-7 h-7"
        />
        <span className='px-2 font-bold'>{name}</span>
        <span>{message}</span>
        </div>
        </div>
  );
};

const LiveChat = () => {
    useEffect(()=>{
        const chat=setInterval(()=>{
            console.log("api polling");
            
            
        },2000);
        return  ()=>clearInterval(chat)
    },[])
  return (
    <div className='w-full h-[550px] ml-2 p-2 border border-black'>
         <p className='text-lg font-bold'>Chat Messages</p>
      <ChatMessages  name="Akshay Saini" message="this is anmaste react live "/>
    </div>
  );
};

export default LiveChat;
