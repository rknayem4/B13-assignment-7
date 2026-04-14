import React from 'react';
import {  HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className=' flex justify-center items-center h-[40vh]'>
      <HashLoader color="green" />
    </div>
  );
};

export default Loading;