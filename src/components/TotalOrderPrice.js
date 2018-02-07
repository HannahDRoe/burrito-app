import React from 'react';

class TotalOrderPrice extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const total = this.props.order.add_to_total_order_price.total;
        return (
            <div>
               {total > 0 && 
               <div> Total: ${(total/100).toFixed(2)}</div>
             }
            </div>
        );
    }
}


export default TotalOrderPrice;