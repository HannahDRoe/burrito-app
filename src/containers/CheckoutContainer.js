import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCompletedEntrees, getOrderTotal} from '../reducers/selectors';
import {addAnotherEntree, placeOrder} from '../actions/actionCreators';
import Button from '../components/Button';

class CheckoutContainer extends React.Component {
    render() {
        return (
            <section id='checkoutContainer'>
                <h1>Order</h1>
                <h2>Total: ${this.props.orderTotal.toFixed(2)}</h2>
                <Button 
                    className = {'checkoutAddAnotherEntreeBtn'}
                    clickHandler ={() => this.props.addAnotherEntree()} 
                    title = {'Add Another Entree'}
                    content ={'Add Another Entree'}
                />
                <Button 
                    className = {'placeOrderBtn'}
                    clickHandler = {this.props.placeOrder} 
                    title = {'Place Order'}
                    content={'Place Order'}
                />
                {this.props.completedEntrees.map((entrees, i) =>{
                    return( 
                        <div className='checkoutCompletedEntreeList' key={'checkout-completed-entreeList-'+ i}>
                            <h4>{entrees.entree_type}</h4>
                            <ul className='checkoutCompletedEntree'>
                                {entrees.ingredients.map((ingredients) =>{
                                    return( 
                                        <li key ={'checkout-entree-item-'+ingredients.name}> 
                                            <p>{ingredients.name}</p>
                                            {ingredients.addExtra ? <p>add extra{ingredients.name}</p> : null}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
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

CheckoutContainer.propTypes = {
    orderTotal: PropTypes.number.isRequired,
    addAnotherEntree: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
    completedEntrees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        entree_type: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            addExtra: PropTypes.bool.isRequired
        })),
        entreeTotal: PropTypes.number.isRequired
    }))
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);