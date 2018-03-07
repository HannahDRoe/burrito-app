import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCompletedEntrees, getOrderTotal} from '../reducers/selectors';
import {addAnotherEntree, placeOrder} from '../actions/actionCreators';
import Button from '../components/Button';

class CheckoutContainer extends React.Component {
    render() {
        console.log(this.props.completedEntrees)
        return (
            <section id='checkoutContainer'>
                <Button 
                    className = {'checkoutAddAnotherEntreeBtn'}
                    clickHandler ={() => this.props.addAnotherEntree()} 
                    title = {'Add Another Entree'}
                />
                <h3>Order</h3>
                {this.props.completedEntrees.map((entrees, i) =>{
                    return( 
                        <div className='checkoutCompletedEntreeList' key={'checkout-completed-entree-'+ i}>
                            <h4>{entrees.entree_type} with</h4>
                            <ul className='checkoutCompletedEntree'>
                                {entrees.ingredients.map((ingredients) =>{
                                    return( 
                                        <li> 
                                            <p>{ingredients.name}</p>
                                            {ingredients.addExtra ? <p>add extra{ingredients.name}</p> : null}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <h2>${this.props.orderTotal.toFixed(2)}</h2>
                <Button 
                    className = {'placeOrder'}
                    clickHandler = {this.props.placeOrder} 
                    title = {'Place Order'}
                    value={'Place Order'}
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
    return bindActionCreators({addAnotherEntree, placeOrder} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
