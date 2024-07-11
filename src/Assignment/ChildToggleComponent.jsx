import React from 'react'

const ChildToggleComponent = ({isToggled, toggleState}) => {
  return (
    <div className='w-96 p-4 border rounded-lg shadow-md bg-slate-400 m-10'>
      <p className='text-lg p-4'>The switch is {isToggled ? 'ON' : 'OFF'}! Wanna turn it {isToggled ? 'OFF' : 'ON'}? </p>
      <button className={`btn ${isToggled ? 'bg-red-800' : 'bg-green-800'} text-white ml-24 py-2 px-4 rounded`}
        onClick={toggleState}>
        {isToggled ? 'OFF' : 'ON'}
      </button>
    </div>
  )
}

export default ChildToggleComponent;
