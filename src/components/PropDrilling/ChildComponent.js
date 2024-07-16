import React from 'react';

const ChildComponent = ({ onButtonClick }) => {
return (
<div>
    <button onClick={onButtonClick}>Clickme</button>
</div>
);
};

export default ChildComponent;