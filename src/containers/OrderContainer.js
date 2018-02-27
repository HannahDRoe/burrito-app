import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/Button';
import { getIngredientsAddedToOrder, getOrderId, getEntreeTypeName , getEntreeId, getEntreeTotal, getORderTotal, getOrderTotal} from '../reducers/selectors';
import {removeSelectedIngredient, removeExtra, finishCurrentEntree} from '../actions/actionCreators';

class OrderContainer extends React.Component {
    
    render() {
        return (
            <div className='orderConatiner'>
                <h3> Your Order</h3>
                <h4>{this.props.entreeName}</h4>
                <ul>
                    {this.props.selectedIngredients.map((ingredient, i) =>{
                        return <li key={this.props.orderId +'-ocsi-'+ingredient.id}>{ingredient.name} 
                                    <Button 
                                        className = {'removeItem'}
                                        clickHandler = {() =>this.props.removeSelectedIngredient(i)} 
                                        title = {'X'}
                                        value = {'remove'}
                                    />
                               {ingredient.addExtra && <div>
                                   <em>little extra {ingredient.name}</em>
                                   <Button 
                                        className = {'removeItem'}
                                        clickHandler = {() =>this.props.removeExtra(i)} 
                                        title = {'X'}
                                        value = {'remove'}
                                    />
                                   </div>}
                                </li>
                    })}
                </ul>
                    <div>${(this.props.entreeTotal).toFixed(2)}</div>
                   {<button 
                        onClick={() => this.props.finishCurrentEntree(this.props.currentEntreeId, this.props.selectedIngredients, this.props.entreeTotal)}
                        disabled ={this.props.selectedIngredients < 1}
                        className ={this.props.selectedIngredients <1 ? 'addSomethingBtn' : 'finishItBtn'}>
                        {this.props.selectedIngredients < 1 ? 'Add something' : 'Finish it!' }
                    </button>}
                    <div>${(this.props.orderTotal).toFixed(2)}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      selectedIngredients: getIngredientsAddedToOrder(state),
      orderId: getOrderId(state),
      entreeName: getEntreeTypeName(state),
      currentEntreeId: getEntreeId(state),
      entreeTotal: getEntreeTotal(state),
      orderTotal: getOrderTotal(state)
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({removeSelectedIngredient, removeExtra, finishCurrentEntree} , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);

