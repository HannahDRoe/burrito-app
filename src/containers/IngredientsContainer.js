import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrderId, 
        getIngredientCategoriesForEntreeType, 
        getEntreeId,getCurrentIngredientCategory, 
        getBaseIngredientItemsToShow, 
        getIfIngredientMaxLimitReached,
        getAddExtra,
        getIngredientsAddedToOrder } from '../reducers/selectors'
import  IngredientListItem  from '../components/IngredientListItem';

import { selectIngredientCategory , addToOrder, addExtra} from '../actions/actionCreators';

class IngredientsContainer extends React.Component {

componentWillMount() {
    this.props.selectIngredientCategory(this.props.ingredientCategories[0].id)   
}

disableButtonClickHandler(itemId){
    let makeButtonDisabled;
    this.props.selectedIngredients.map((ingredients) =>{
        if (ingredients.id === itemId){
            return makeButtonDisabled = ingredients.addExtra
        } 
    })
    return makeButtonDisabled;
}

    render() {
        return (
            <div>
                {this.props.ingredientCategories.map(category =>{
                    return <li key = {'ingredientCat-'+category.id} value={category.id} onClick={() => this.props.selectIngredientCategory(category.id)}>{category.name}</li>
                    })
                }
                {this.props.ingredientListItems !== null && this.props.ingredientListItems &&
                    this.props.ingredientListItems.map((item, i) => {
                        return <IngredientListItem 
                                    key={this.props.orderId+'-il-'+item.id} 
                                    i = {i}
                                    className ={'ingredientListItem'}
                                    listItemOnClick ={() =>{this.props.addToOrder(item.id, item.name, item.price, this.props.indexOfIngredientToReplace)}}
                                    name = {item.name}
                                    description = {item.description}
                                    price = { item.price > 0 && <span> {(item.price /100).toFixed(2)}</span>}
                                    itemCanAddExtra ={item.can_add_extra}
                                    canAddExtra={this.props.canAddExtra}
                                    addExtraOnClick ={() =>{this.props.addExtra(item.id)}}
                                    disableButton = {this.disableButtonClickHandler(item.id)}
                                />
                            })
                }

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
        selectedIngredients: getIngredientsAddedToOrder(state)


    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectIngredientCategory, addToOrder, addExtra} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);