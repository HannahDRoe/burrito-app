import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCompletedEntrees, getOrderTotal} from '../reducers/selectors';
import {goBackToAddingFood, placeOrder} from '../actions/actionCreators';
import Button from '../components/Button';

class CheckoutContainer extends React.Component {
    render() {
        console.log(this.props.completedEntrees)
        return (
            <section id='checkoutContainer'>
                <Button 
                    className = {'goBack'}
                    clickHandler ={() => this.props.goBackToAddingFood()} 
                    title = {'Go back to adding stuff'}
                />
                <h3>Order</h3>
                {this.props.completedEntrees.map((entrees, i) =>{
                    return( 
                        <div key={'checkout-completed-entree-'+ i}>
                            <p>{entrees.entree_type}</p>
                            {entrees.ingredients.map((ingredients) =>{
                                return( 
                                    <div> 
                                        <p>{ingredients.name}</p>
                                        {ingredients.addExtra ? <p>add extra{ingredients.name}</p> : null}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <p>${this.props.orderTotal.toFixed(2)}</p>
                <Button 
                    className = {'placeOrder'}
                    clickHandler = {this.props.placeOrder} 
                    title = {'Place Order'}
                />
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        completedEntrees: getCompletedEntrees(state),
        orderTotal: getOrderTotal(state)

    };
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({goBackToAddingFood, placeOrder} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
