import React, { useState } from 'react'
import './counter.css'

const CounterFunction = () => {
const [count,setCount] = useState(0);

//increment
const increment = () => {
    setCount(count+1);
}

//decrement
const decrement = () => {
    setCount(count -1)
}


  return (
    <>
        <div>
            <h1>Counter Function</h1>
            <h2>Count:{count}</h2>
            <button className='btn' onClick={increment}>Increment</button>
            <button className='btn' onClick={decrement}>Decrement</button>

        </div>
    </>
  )
}

export default CounterFunction
