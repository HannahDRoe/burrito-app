import React from 'react';
import PropTypes from 'prop-types';

const SelectEntreeItem = (props) =>{
    let {className, entree, description, onClick, imgAlt, imgSrc} = props;

    return(
        <div className={className} onClick={onClick} onKeyPress={onClick} title={entree} role='button' tabIndex='0'>
            <img src={imgSrc} alt ={imgAlt}  title={entree}/>
            <h4>{entree}</h4>
            <p> {description} </p>
        </div>
    )
}
SelectEntreeItem.propTypes ={
    className: PropTypes.string.isRequired,
    entree: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    imgAlt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
} 
export default SelectEntreeItem;        