import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/Button';
import { getIngredientsAddedToOrder,
        getOrderId, 
        getEntreeTypeName, 
        getEntreeId, 
        getEntreeTotal, 
        getORderTotal, 
        getOrderTotal,
        getCompletedEntrees} from '../reducers/selectors';
import {removeSelectedIngredient, removeExtra, finishCurrentEntree, removeCompletedEntree, checkout} from '../actions/actionCreators';

class OrderContainer extends React.Component {
    completedEntreesCheckoutButton() {
        if(this.props.currentEntreeId !== null){
            this.props.finishCurrentEntree(this.props.currentEntreeId, this.props.entreeTypeName, this.props.selectedIngredients, this.props.entreeTotal),
            this.props.checkout()
                
        }else{ 
            return this.props.checkout()
        }
    }
    render() {
        return (
            <div id='orderConatiner'>
                <h3> Your Order</h3>
                <h4>{this.props.entreeTypeName}</h4>
                <ul id='selectedIngredientsList'>
                    {this.props.selectedIngredients.map((ingredient, i) =>{
                        return <li key={this.props.orderId +'-ocsi-'+ingredient.id}>
                                <div className='selectedIngredientItem'>
                                    <p>{ingredient.name}</p>
                                    <Button 
                                        className = {'removeItem'}
                                        clickHandler = {() =>this.props.removeSelectedIngredient(i)} 
                                        title = {'X'}
                                        value = {'remove'}
                                    />
                                </div>
                                {ingredient.addExtra &&
                                    <div className='addedExtraIngredient'>
                                        <p>extra {ingredient.name}</p>
                                        <Button 
                                                className = {'removeItem'}
                                                clickHandler = {() =>this.props.removeExtra(i)} 
                                                title = {'x'}
                                                value = {'remove'}
                                            />
                                    </div>
                                   }
                            </li>
                    })}
                </ul>
                <h2  className='orderTotal'>{this.props.entreeTotal > 0 ? '$' + (this.props.entreeTotal).toFixed(2) : ''}</h2>
                {<button 
                        onClick={() => this.props.finishCurrentEntree(this.props.currentEntreeId, this.props.entreeTypeName, this.props.selectedIngredients, this.props.entreeTotal)}
                        disabled ={this.props.selectedIngredients < 1}
                        className ={this.props.selectedIngredients <1 ? 'addSomethingBtn' : 'finishItBtn'}>
                        {this.props.selectedIngredients < 1 ? 'Add something' : 'Finish it!'}
                    </button>
                }
                {this.props.completedEntrees.length >= 1 && 
                    <div>
                        <ul id='completedEntreeList'>
                        {this.props.completedEntrees.map((entrees, i) =>{
                            return (
                                <li key={'completedEntree ' + i}>
                                    <p>{entrees.entree_type} <em>with</em> {entrees.ingredients[0].name}
                                        <span>
                                            <Button 
                                            className = {'removeItem'}
                                            clickHandler = {() =>this.props.removeCompletedEntree(i)} 
                                            title = {'x'}
                                            value = {'remove'}
                                            />
                                        </span>
                                    </p>
                                    
                                </li>)
                        })}
                        </ul>
                        <h2 className='orderTotal'>${(this.props.orderTotal).toFixed(2)}</h2>
                        <Button 
                            className = {'checkout'}
                            clickHandler = {() => this.completedEntreesCheckoutButton()} 
                            title = {'Checkout'}
                        />
                    </div>
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);

