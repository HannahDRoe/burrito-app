import React from 'react';

const Button = (props) => {
    return (
        <button className = {props.className} onClick={props.clickHandler}>
            {props.title}
        </button>
    );
   }

export default Button;