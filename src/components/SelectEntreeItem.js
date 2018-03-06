import React from 'react';


const SelectEntreeItem = (props) =>{
    let {className, entree, id, description, onClick} = props;

    return(
        <div className={className} value={id} onClick={onClick} >
            <h4>{entree}</h4>
            <p> {description} </p>
        </div>
    )

}   


export default SelectEntreeItem;