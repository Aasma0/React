import React, { useState } from react;
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
const [message, setMessage] = useState('Hello from Parent');

const handleClick = () => {
setMessage('Message Updated by Child');
};

return (
<div>
    <h1>{message}</h1>
    <ChildComponent onButtonClick={handleClick}/>
</div>
);
};

export default ParentComponent;