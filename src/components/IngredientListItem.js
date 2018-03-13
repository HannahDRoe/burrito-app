import React from 'react';
import { ingredient_categories } from '../data/ingredient_categories';

const IngredientListItem = (props) =>{

    return (     
        <div className= {props.className}>
            <div onClick={props.listItemOnClick} className={'ingredientItemImgTextContainer'}>
                <img 
                    className={'ingredientItemImg'} 
                    src={props.imgSrc} 
                    alt = {props.name}
                />
                <div className={'ingredientItemText'}> 
                    <h4>{props.name} {props.price ? '$'+ props.price : ''}</h4>
                    <p>{props.description}</p>
                </div>
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