import React from 'react';

const Button = (props) => {
    return (
        <button className = {props.className} onClick={props.clickHandler} value={props.value} title={props.title}>
            {props.img && <img src ={props.img} alt={props.imgAlt} />}
            {props.content && <p>{props.content}</p>}
        </button>
    );
   }

export default Button;