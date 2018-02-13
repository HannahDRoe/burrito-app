import React from 'react';
import { OrderList } from '../components/OrderList';
import  TotalOrderPrice  from '../components/TotalOrderPrice';
class OrderContainer extends React.Component {
    render() {
        return (
            <div className='orderConatiner'>
                <h3> Your Order</h3>
                {/* <OrderList {...this.props}{...this.state} />
                <TotalOrderPrice {...this.props}/> */}
            </div>
        );
    }
}

export default OrderContainer;