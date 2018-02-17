import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrderId, getIngredientCategoriesForEntreeType, getEntreeId,getCurrentIngredientCategory, getBaseIngredientItemsToShow, getIfIngredientMaxLimitReached } from '../reducers/selectors'
// import { IngredientsList } from '../components/IngredientsList';
import  IngredientListItem  from '../components/IngredientListItem';

import { selectIngredientCategory , addToOrder} from '../actions/actionCreators';

class IngredientsContainer extends React.Component {

componentWillMount() {
    this.props.selectIngredientCategory(this.props.ingredientCategories[0].id)   
}


    render() {
        return (
            <div>
                {this.props.ingredientCategories.map(category =>{
                    return <li key = {'ingredientCat-'+category.id} value={category.id} onClick={() => this.props.selectIngredientCategory(category.id)}>{category.name}</li>
                    })
                }
                {this.props.ingredientListItems !== null && this.props.ingredientListItems &&
                    this.props.ingredientListItems.map((item) => {
                        return <IngredientListItem 
                                    key={this.props.orderId+'-il-'+item.id} 
                                    listItemOnClick ={() =>{ this.props.addToOrder(item.id, item.name, item.price, this.props.indexOfIngredientToReplace)}}
                                    name = {item.name}
                                    description = {item.description}
                                    price = { item.price > 0 && <span> {(item.price /100).toFixed(2)}</span>}
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
        indexOfIngredientToReplace: getIfIngredientMaxLimitReached(state)


    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectIngredientCategory, addToOrder} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);