import React from 'react';

const IngredientListItem = (props) =>{

    return (     
        <div className= {props.className}>
            <div onClick={props.listItemOnClick}>
                {/* <img src={props.img_src}  alt = {props.name}/> */}
                <h4>{props.name} {props.price ? '$'+ props.price : ''}</h4>
                <p>{props.description}</p>
            </div>
            {props.itemCanAddExtra === true  && props.canAddExtra[props.i] && 
                <button disabled={props.disableButton}
                        className={'addExtraButton'} 
                        onClick={props.addExtraOnClick}>
                            {props.disableButton ?  'Added to Order' : 'Add Extra? '+ (props.itemAddExtraPrice ? '$' + props.itemAddExtraPrice : '')}
                </button>}
        </div>
    )
}



export default IngredientListItem;