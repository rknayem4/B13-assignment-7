import React from 'react';
import { LuMessageSquareMore, LuVideo } from 'react-icons/lu';
import { TbPhoneCall } from 'react-icons/tb';

const TimeLineCard = ({data}) => {
  const {name , btn , time} = data
  let btnIcon = ""
  if(btn === "Text"){
    btnIcon = <LuMessageSquareMore className="text-5xl" />
  }
  else if(btn === 'Call'){
    btnIcon = <TbPhoneCall className="text-5xl" />
  }
  else{
    btnIcon = <LuVideo className="text-5xl" />
  }
  // console.log(data)
  return (
    <div className='  py-3 my-4 shadow border border-gray-100 flex gap-5 items-center rounded-2xl px-8'>
      {btnIcon }
      <div className='space-y-3'>
        <h2 className=' text-gray-500 text-xl ' ><span className='text-black font-semibold '>{btn}</span> With {name}</h2>
      <p className=' text-gray-500 '>{time}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;