import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectEntreeItem  from '../components/SelectEntreeItem';
import IngredientsContainer from './IngredientsContainer';
import OrderContainer  from './OrderContainer';
import Button  from '../components/Button';
import { getEntreeTypes, getOrderStatus, getOrderId, getDataStatus } from '../reducers/selectors'
import {selectEntree, resetOrder} from '../actions/actionCreators';

class Main extends React.Component {

    render() {
        return (
            
            <div className='mainContainer'>
                { this.props.appData  && <div>Loading...</div>}
                {this.props.orderStatus === 'order-not-started' && this.props.entreeTypes && 
                    <div>
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
                    </div>
                }
                {this.props.orderStatus === 'order-started' &&
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
            </div>
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
    return bindActionCreators({selectEntree, resetOrder } , dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
