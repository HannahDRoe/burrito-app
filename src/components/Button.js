import React from 'react';

const Button = (props) => {
    return (
        <button className = {props.className} onClick={props.clickHandler} onKeyPress={props.keyPressHandler} value={props.value} title={props.title}>
            {props.img && <img src ={props.img} alt={props.imgAlt} />}
           {props.content}
        </button>
    );
   }

export default Button;