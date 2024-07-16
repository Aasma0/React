import React from 'react'

const EventHandling = ({onButtonClick}) => {
    
  return (
    <div>
      <h1>EventHandling</h1>
      <button onClick={()=>onButtonClick()} className='bg-red-200 rounded mx-6'>
            click me
        </button>

    </div>
  )
}

export default EventHandling
