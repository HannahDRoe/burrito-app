import React from 'react';

const Button = (props) => {
    return (
        <button className = {props.className} onClick={props.clickHandler} value={props.value}>
            {props.img && <img src ={props.img} alt={props.imgAlt} />}
            {props.title && <p>{props.title}</p>}
        </button>
    );
   }

export default Button;