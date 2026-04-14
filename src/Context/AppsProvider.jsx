import React, { useState } from 'react';
import { AppsContext } from './AppsContext';

const AppsProvider = ({children}) => {
  const [friend, setFriend] = useState([])
  const data = {
    friend,
    setFriend,
  }
  return (
    <AppsContext.Provider value={data}>
      {children}
    </AppsContext.Provider>
  );
};

export default AppsProvider;