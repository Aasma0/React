import React, { useState } from 'react'
import ChildToggleComponent from './ChildToggleComponent';

const ParentToggleComponent = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleState = () => {
        setIsToggled(prevState => !prevState)
    }
  return (
    <div>
      <ChildToggleComponent isToggled={isToggled} toggleState={toggleState}/>
    </div>
  )
}

export default ParentToggleComponent
