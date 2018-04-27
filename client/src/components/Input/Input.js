import React from 'react';

const Input = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={props.changed} value={props.value} />
        </div>
    );
};

export default Input;