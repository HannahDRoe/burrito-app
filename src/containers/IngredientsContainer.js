import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getOrderId, 
        getIngredientCategoriesForEntreeType, 
        getEntreeId,getCurrentIngredientCategory, 
        getBaseIngredientItemsToShow, 
        getIfIngredientMaxLimitReached,
        getAddExtra,
		getIngredientsAddedToOrder,
		getIngredientCategoriesMaxLimit } from '../reducers/selectors';
import  IngredientListItem  from '../components/IngredientListItem';
import Button from '../components/Button';
import { selectIngredientCategory , addToOrder, addExtra} from '../actions/actionCreators';

class IngredientsContainer extends React.Component {

componentWillMount() {
    this.props.selectIngredientCategory(this.props.ingredientCategories[0].id)   
}

disableButtonClickHandler(itemId){
    let makeButtonDisabled;
    this.props.selectedIngredients.map((ingredients) => ingredients.id === itemId ?  makeButtonDisabled = ingredients.addExtra : null)
    return makeButtonDisabled;
}
indicateAddToOrder(itemId){
    let indicateItemAddedToOrder;
    this.props.selectedIngredients.map((ingredients) => ingredients.id === itemId ? indicateItemAddedToOrder=true : null)
    return indicateItemAddedToOrder;
    // console.log(indicateItemAddedToOrder)
}

    render() {
        return (
            <div id='ingredientsContainer'>
                <nav id='ingredientCategoryNav'>
                    <ul>
                        {this.props.ingredientCategories.map(category =>{
                            return <li className = {this.props.currentIngredientCategory=== category.id ? 'currentCategory' : null}
                                        key = {'ingredientCat-'+category.id}>
                                    <Button 
                                        className={'ingredientCategoryNavBtns'}
                                        clickHandler ={() => this.props.selectIngredientCategory(category.id)}
                                        title={category.id} 
                                        content={category.name}
                                    />
                                 </li>
                            })
                        }
                    </ul>
                </nav>
				{/* <h4>{this.props.ingredientMaxLimit > 1 ? 'Pile \'em on': 'Select Just'+ ' ' + this.props.ingredientMaxLimit }</h4> */}
                <div id='ingredientListItemsContainer'>
                    {this.props.ingredientListItems !== null && this.props.ingredientListItems &&
                        this.props.ingredientListItems.map((item, i) => {
                            return <IngredientListItem 
                                        key={this.props.orderId+'-il-'+item.id} 
                                        i = {i}
                                        className ={'ingredientListItem'}
                                        listItemOnClick ={() =>{this.props.addToOrder(item.id, item.name, item.price, this.props.indexOfIngredientToReplace)}}                                       
                                        keyPressHandler={() =>{this.props.addToOrder(item.id, item.name, item.price, this.props.indexOfIngredientToReplace)}}
                                        name = {item.name}
                                        description = {item.description}
                                        imgSrc = {item.img_src}
                                        price = { item.price > 0 && (item.price /100).toFixed(2)}
                                        itemCanAddExtra ={item.can_add_extra}
                                        itemAddExtraPrice = {item.additional_price_for_extra > 0 && (item.additional_price_for_extra/100).toFixed(2)}
                                        canAddExtra={this.props.canAddExtra}
                                        addExtraOnClick ={() =>{this.props.addExtra(item.id)}}
                                        indicateAddedToOrder ={this.indicateAddToOrder(item.id)}
                                        disableButton = {this.disableButtonClickHandler(item.id)}
                                    />
                                })
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        orderId: getOrderId(state),
        ingredientCategories: getIngredientCategoriesForEntreeType(state),
        entreeType: getEntreeId(state),
        currentIngredientCategory: getCurrentIngredientCategory(state),
        ingredientListItems: getBaseIngredientItemsToShow(state),
        indexOfIngredientToReplace: getIfIngredientMaxLimitReached(state),
        canAddExtra: getAddExtra(state),
		selectedIngredients: getIngredientsAddedToOrder(state),
		ingredientMaxLimit: getIngredientCategoriesMaxLimit(state)


    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectIngredientCategory, addToOrder, addExtra} , dispatch)
}
IngredientsContainer.propTypes = {
    selectIngredientCategory: PropTypes.func.isRequired,
    addToOrder: PropTypes.func.isRequired,
    addExtra: PropTypes.func.isRequired,
    ingredientCategories: PropTypes.array.isRequired,
    selectedIngredients: PropTypes.array.isRequired,
    currentIngredientCategory: PropTypes.string,
    ingredientListItems: PropTypes.array,
	orderId: PropTypes.string.isRequired,
	indexOfIngredientToReplace: PropTypes.number,
	canAddExtra: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);