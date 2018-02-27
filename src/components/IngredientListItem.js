import React from 'react';

const IngredientListItem = (props) =>{

    return (     
        <div className= {props.className}>
            <div onClick={props.listItemOnClick}>
                {/* <img src={base.img_src}  alt = {base.name}/> */}
                <h4>{props.name} {props.price}</h4>
                <em>{props.description}</em>
            </div>
            {props.itemCanAddExtra === true  && props.canAddExtra[props.i] && <button disabled={props.disableButton}  onClick={props.addExtraOnClick}>Add Extra? <em>{props.itemAddExtraPrice}</em></button>}
        </div>
        )

    

}



export default IngredientListItem;