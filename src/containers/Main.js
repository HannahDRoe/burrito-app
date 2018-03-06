import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectEntreeItem  from '../components/SelectEntreeItem';
import IngredientsContainer from './IngredientsContainer';
import OrderContainer  from './OrderContainer';
import CheckoutContainer from './CheckoutContainer';
import Button  from '../components/Button';
import { getEntreeTypes, getOrderStatus, getOrderId, getDataStatus } from '../reducers/selectors'
import {selectEntree, resetOrder, addAnotherEntree, checkout} from '../actions/actionCreators';

class Main extends React.Component {

    render() {
        return (
            <main id='mainContainer'>
                {this.props.appData  && <h1 id='loading'>Loading...</h1>}
                {this.props.orderStatus === 'entree-not-started' && this.props.entreeTypes && 
                    <section id='selectEntreeContainer'>
                        <h3>Choose an Entree</h3>
                        <div id='selectEntree'>
                            {this.props.entreeTypes.map(entrees => {
                                return <SelectEntreeItem 
                                            className={'entreeTypes'}
                                            key={this.props.orderId+ '-'+ entrees.id}
                                            entree={entrees.name} 
                                            description={entrees.description} 
                                            id={entrees.id} 
                                            onClick ={() => this.props.selectEntree(entrees.id)}
                                        />
                                })
                            }
                        </div>
                        <OrderContainer/>
                    </section>
                }
                {this.props.orderStatus === 'entree-started'  &&
                    <section id='selectIngredientsContainer' >
                        <Button 
                            className = {'resetButton'}
                            clickHandler = {this.props.resetOrder} 
                            title = {'< Start Over'}
                        />
                        <IngredientsContainer />
                        <OrderContainer/>
                    </section>
                }
                {this.props.orderStatus === 'entree-completed'  &&
                    <div id='finshedEntree'>
                        <Button 
                            className = {'addAnotherEntreeButton'}
                            clickHandler = {this.props.addAnotherEntree} 
                            title = {'Add Another Entree?'}
                        />
                        <Button 
                            className = {'checkoutFinishedEntree'}
                            clickHandler = {this.props.checkout} 
                            title = {'Checkout'}
                        />
                    </div>
                }
                {this.props.orderStatus === 'order-checkout'  &&
                    <div> 
                        <CheckoutContainer/>
                    </div>
                }
                {this.props.orderStatus === 'order-placed' &&
                    <div>
                        Thank you for your order!
                    </div>
                }

            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      entreeTypes: getEntreeTypes(state),
      orderStatus: getOrderStatus(state),
      orderId: getOrderId(state),
      appData: getDataStatus(state)
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectEntree, resetOrder, addAnotherEntree, checkout} , dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
