import React from 'react';
import PropTypes from 'prop-types';
const IngredientListItem = (props) =>{

    return (     
        <div className={props.className} onClick={props.listItemOnClick} onKeyPress={props.listItemOnClick} role='button' tabIndex='0'>
            <div  className={'ingredientItemImgTextContainer'} >
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
            {props.itemCanAddExtra  && props.indicateAddedToOrder && 
                <button disabled={props.disableButton}
                        className={'addExtraButton'} 
                        onClick={props.addExtraOnClick}>
                            {props.disableButton ?  'Extra Added' : 'Add Extra? '+ (props.itemAddExtraPrice ? '$' + props.itemAddExtraPrice : '')}
                </button>}
        </div>
    )
}

IngredientListItem.propTypes = {
    className: PropTypes.string,
    listItemOnClick: PropTypes.func,
    indicateAddedToOrder: PropTypes.bool,
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    itemCanAddExtra: PropTypes.bool.isRequired,
    addExtraOfOrderItem: PropTypes.array,
    i: PropTypes.number.isRequired,
    disableButton: PropTypes.bool,
    addExtraOnClick: PropTypes.func.isRequired,
    itemAddExtraPrice: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
}


export default IngredientListItem;