import React from 'react';

const Logout = ({ setIsAut }) => {
  const handlerEvent = () => {
    setIsAut(false);
  };
  return <button onClick={handlerEvent}>Sign Out</button>;
};

export default Logout;
