import React, { useState } from 'react';
import ChildMsgComponent from './ChildMsgComponent';

const ParentMsgComponent = () => {
  const [message, setMessage] = useState("Hello, World!");

  const updateMessage = () => {
    setMessage("Message Updated!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-96 m-10 rounded-lg bg-slate-400">
      <h2 className="text-4xl mb-4">Message Display App</h2>
      <ChildMsgComponent message={message} />
      <div className="mt-4">
        <button 
          onClick={updateMessage} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
          Update Message
        </button>
      </div>
    </div>
  );
};

export default ParentMsgComponent;
