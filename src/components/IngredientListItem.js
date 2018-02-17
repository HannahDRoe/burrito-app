import React from 'react';

const IngredientListItem = (props) =>{

    return (     
        <div onClick={props.listItemOnClick}>
            {/* <img src={base.img_src}  alt = {base.name}/> */}
            <h4>{props.name} {props.price}</h4>
            <em>{props.description}</em>
        </div>
        )
    

}



export default IngredientListItem;