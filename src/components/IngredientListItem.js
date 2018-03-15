import React from 'react';

const IngredientListItem = (props) =>{

    return (     
        <div className={props.className}>
            <div onClick={props.listItemOnClick} className={'ingredientItemImgTextContainer'}>
                {props.indicateAddedToOrder &&  
                    <div className='itemAddedToOrder'>
                        <img 
                            src={'https://s3-us-west-2.amazonaws.com/burrito-app/checkmark-white.svg'}
                            alt={'Item Added to Order'}
                            title={'Item Added To Order'}
                        />
                    </div> 
                }
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
                            {props.disableButton ?  'Extra Added' : 'Add Extra? '+ (props.itemAddExtraPrice ? '$' + props.itemAddExtraPrice : '')}
                </button>}
        </div>
    )
}



export default IngredientListItem;