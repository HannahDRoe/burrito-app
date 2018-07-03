import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    return (
        <button className = {props.className} onClick={props.clickHandler} onKeyPress={props.keyPressHandler} value={props.value} title={props.title}>
            {props.img && <img src ={props.img} alt={props.imgAlt} />}
           {props.content}
        </button>
    );
   }

   Button.propTypes ={
       className: PropTypes.string,
       clickHandler: PropTypes.func.isRequired,
       keyPressHandler: PropTypes.func,
       value: PropTypes.string,
       title: PropTypes.string,
       img: PropTypes.string,
       imgAlt: PropTypes.string,
       content: PropTypes.string.isRequired,
   }
export default Button;