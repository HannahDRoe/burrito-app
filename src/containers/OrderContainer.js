import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/Button';
import { getIngredientsAddedToOrder, getOrderId, getEntreeTypeName , getEntreeId} from '../reducers/selectors';
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
                    <div>This is where the total lives</div>
                    <button onClick={() =>this.props.finishCurrentEntree(this.props.currentEntreeId,  this.props.selectedIngredients)}>Finish it!</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      selectedIngredients: getIngredientsAddedToOrder(state),
      orderId: getOrderId(state),
      entreeName: getEntreeTypeName(state),
      currentEntreeId: getEntreeId(state)
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({removeSelectedIngredient, removeExtra, finishCurrentEntree} , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);

