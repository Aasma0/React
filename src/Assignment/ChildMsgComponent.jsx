import React, { useEffect } from 'react';

const ChildMsgComponent = ({ message }) => {
  useEffect(() => {
    console.log(`Message updated to: ${message}`);
  }, [message]);

  return (
    <div>
      <h2 className="text-2xl">Current Message: {message}</h2>
      <p className="text-gray-700">The message will update when you click the button.</p>
    </div>
  );
};

export default ChildMsgComponent;
