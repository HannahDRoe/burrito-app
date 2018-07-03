import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { getIngredientsAddedToOrder,
        getOrderId, 
        getEntreeTypeName, 
        getEntreeId, 
        getEntreeTotal, 
        getOrderTotal,
        getCompletedEntrees} from '../reducers/selectors';
import {removeSelectedIngredient, 
        removeExtra, 
        finishCurrentEntree, 
        removeCompletedEntree,
        checkout} from '../actions/actionCreators';

class OrderContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hideOrder: true
        }   
    
    }
    completedEntreesCheckoutButton() {
        if(this.props.currentEntreeId !== null && this.props.selectedIngredients.length >0){
            this.props.finishCurrentEntree(this.props.currentEntreeId, this.props.entreeTypeName, this.props.selectedIngredients, this.props.entreeTotal);
            this.props.checkout();
                
        }else{ 
            return this.props.checkout()
        }
    }
    toggleDisplayOrder() {
        this.setState({
           hideOrder: !this.state.hideOrder
        })
    }

    render() {
        return (
            <div id='orderContainer' >
                <h3>Your Order</h3>
                <Button 
                    className ={this.state.hideOrder ? 'hideOrderBtn' : 'displayOrderBtn'}
                    keyPressHandler ={(key) =>this.keyPressToggleKeys(key)}
                    clickHandler ={() => this.toggleDisplayOrder()}
                    title= {'Your Order'}
                    content={'Your Order'}
                    img ={'https://s3-us-west-2.amazonaws.com/burrito-app/arrow.svg'}
                    imgAlt={''}
                />
                <div className={this.state.hideOrder ?  'hideOrderIngredients': 'displayOrderIngredients'}>
                    <h4>{this.props.entreeTypeName}</h4>
                    <ul id='selectedIngredientsList'>
                        {this.props.selectedIngredients.map((ingredient, i) =>{
                            return <li key={this.props.orderId +'-ocsi-'+ingredient.id}>
                                    <div className='selectedIngredientItem'>
                                        <p>{ingredient.name}</p>
                                        <Button 
                                            className = {'removeItem'}
                                            clickHandler = {() =>this.props.removeSelectedIngredient(i)} 
                                            title = {'Remove'}
                                            content = {'X'}
                                        />
                                    </div>
                                    {ingredient.addExtra &&
                                        <div className='addedExtraIngredient'>
                                            <p>extra {ingredient.name}</p>
                                            <Button 
                                                className = {'removeItem'}
                                                clickHandler = {() =>this.props.removeExtra(i)} 
                                                title = {'Remove'}
                                                content = {'X'}
                                            />
                                        </div>
                                    }
                                </li>
                        })}
                    </ul>
                    <h4  className='orderTotal'>{this.props.entreeTotal > 0 ? '$' + (this.props.entreeTotal).toFixed(2) : null}</h4>
                    {<button 
                            onClick={() => this.props.finishCurrentEntree(this.props.currentEntreeId, this.props.entreeTypeName, this.props.selectedIngredients, this.props.entreeTotal)}
                            disabled ={this.props.selectedIngredients < 1}
                            className ={this.props.selectedIngredients <1 ? 'hideAddEntreeToOrder' : 'addEntreeToOrder'}>
                            {this.props.selectedIngredients < 1 ? null : 'Add To Order'}
                        </button>
                    }
                    {this.props.completedEntrees.length >= 1 && 
                        <div>
                            <ul id='completedEntreeList'>
                            {this.props.completedEntrees.map((entrees, i) =>{
                                return (
                                    <li key={'completedEntree ' + i}>
                                        <div  className='selectedIngredientItem'> 
                                            <p>{entrees.entree_type} with {entrees.ingredients[0].name}</p>
                                            <Button 
                                                className = {'removeItem'}
                                                clickHandler = {() =>this.props.removeCompletedEntree(i)} 
                                                title = {'Remove'}
                                                content = {'X'}
                                            />
                                        </div>
                                    </li>)
                            })}
                            </ul>
                            <h4 className='orderTotal'>Total: ${(this.props.orderTotal).toFixed(2)}</h4>
                            <Button 
                                className = {'checkout'}
                                clickHandler = {() => this.completedEntreesCheckoutButton()} 
                                title = {'Checkout'}
                                content ={'Checkout'}
                            />
                        </div>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      selectedIngredients: getIngredientsAddedToOrder(state),
      orderId: getOrderId(state),
      entreeTypeName: getEntreeTypeName(state),
      currentEntreeId: getEntreeId(state),
      entreeTotal: getEntreeTotal(state),
      orderTotal: getOrderTotal(state),
      completedEntrees: getCompletedEntrees(state)
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({removeSelectedIngredient, removeExtra, finishCurrentEntree, removeCompletedEntree, checkout} , dispatch)
}
OrderContainer.propTypes = {
    selectedIngredients: PropTypes.array.isRequired,
    orderId: PropTypes.string.isRequired,
    entreeTypeName: PropTypes.string.isRequired,
    currentEntreeId: PropTypes.string.isRequired,
    entreeTotal: PropTypes.number.isRequired,
    orderTotal: PropTypes.number,
    completedEntrees: PropTypes.array,
    removeSelectedIngredient: PropTypes.func.isRequired,
    removeExtra: PropTypes.func.isRequired,
    finishCurrentEntree: PropTypes.func.isRequired,
    removeCompletedEntree: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired,

}
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);

