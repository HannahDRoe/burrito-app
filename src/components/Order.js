import React from 'react';
import { OrderList } from './OrderList';
import  TotalOrderPrice  from './TotalOrderPrice'
class Order extends React.Component {
    render() {
        return (
            <div className='orderConatiner'>
                <h3> Your Order</h3>
                <OrderList {...this.props}{...this.state} />
                <TotalOrderPrice {...this.props}/>
            </div>
        );
    }
}

export default Order;