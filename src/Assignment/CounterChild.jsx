import React, { useEffect } from 'react';

const CounterChild = ({ counter }) => {
  useEffect(() => {
    console.log(`Counter updated to: ${counter}`);
  }, [counter]);

  return (
    <div>
      <h2 className="text-2xl">Current Count: {counter}</h2>
      <p className="text-gray-700">The counter is updated every time you click the buttons.</p>
    </div>
  );
};

export default CounterChild;
