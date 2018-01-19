import React from 'react';
import { OrderList } from './OrderList';

class Order extends React.Component {
    render() {
        return (
            <div className='orderConatiner'>
                <h3> Your Order</h3>
                <OrderList {...this.props} />
            </div>
        );
    }
}

export default Order;