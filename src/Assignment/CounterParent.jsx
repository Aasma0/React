import React, { useState } from 'react';
import CounterChild from './CounterChild';

const CounterParent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="flex flex-col items-center justify-center w-96 m-10 rounded-lg bg-slate-400">
      <h3 className="text-4xl mb-4">Counter App</h3>
      <CounterChild counter={counter} increment={increment} decrement={decrement} />
      <div className="mt-4 space-x-2">
        <button 
          onClick={increment} 
          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700">
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterParent;
