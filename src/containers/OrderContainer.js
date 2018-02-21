import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/Button';
import { getIngredientsAddedToOrder, getOrderId } from '../reducers/selectors';
import {removeSelectedIngredient, removeExtra} from '../actions/actionCreators';

class OrderContainer extends React.Component {

    render() {
        return (
            <div className='orderConatiner'>
                <h3> Your Order</h3>
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
                                   <em>a little extra {ingredient.name}</em>
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

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      selectedIngredients: getIngredientsAddedToOrder(state),
      orderId: getOrderId(state)
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({removeSelectedIngredient, removeExtra} , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);

