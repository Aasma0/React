import React from "react";

const GreetComponent = (props) => {
    const styles={
        div:{
            backgroundColor: 'lightblue',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 5px 1px lightblue'
        }
    }    

return (
    <div style={styles.div}>
        <h1 className="text-purple-600">Greet Component</h1>
        <p>heeelllloooooooo, {props.name} {props.caste}! we are learning props.</p>
    </div>
    )
}

export default GreetComponent;