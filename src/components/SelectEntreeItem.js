import React from 'react';

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
export default SelectEntreeItem;        