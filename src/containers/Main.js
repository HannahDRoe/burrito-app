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
            
            <main className='mainContainer'>
                {this.props.appData  && <h1>Loading...</h1>}
                {this.props.orderStatus === 'entree-not-started' && this.props.entreeTypes && 
                    <section>
                        <h3>Choose an Entree</h3>
                        {this.props.entreeTypes.map(entrees => {
                            return <SelectEntreeItem 
                                        key={this.props.orderId+ '-'+ entrees.id}
                                        entree={entrees.name} 
                                        description={entrees.description} 
                                        id={entrees.id} 
                                        onClick ={() => this.props.selectEntree(entrees.id)}
                                    />
                            })
                        }
                        <OrderContainer/>
                    </section>
                }
                {this.props.orderStatus === 'entree-started'  &&
                    <div>
                        <Button 
                            className = {'resetButton'}
                            clickHandler = {this.props.resetOrder} 
                            title = {'< Start Over'}
                        />
                        <IngredientsContainer />
                        <OrderContainer/>
                    </div>
                }
                {this.props.orderStatus === 'entree-completed'  &&
                    <div>
                        <Button 
                            className = {'addAnotherEntreeButton'}
                            clickHandler = {this.props.addAnotherEntree} 
                            title = {'Add Another Entree?'}
                        />
                        <Button 
                            className = {'checkout'}
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
