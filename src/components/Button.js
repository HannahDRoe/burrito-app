import React from 'react';

const Button = (props) => {
    return (
        <button id = {props.idName} onClick={props.clickHandler}>
            {props.title}
        </button>
    );
   }

export default Button;