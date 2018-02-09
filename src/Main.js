import React from 'react';
import SelectEntree  from './components/SelectEntree';
import IngredientsSelection from './components/IngredientsSelection';
import Order  from './components/Order';
import Button  from './components/Button';

class Main extends React.Component {

    render() {
        return (
            <div className='mainContainer'>
                {this.props.state.order.current_order_status === 'order-started' &&
                    <div>
                        <Button 
                            idName = {'resetButton'}
                            clickHandler = {this.props.resetOrder} 
                            title = {'< Start Over'}
                        />
                        <IngredientsSelection {...this.props.state} {...this.props}/>
                        <Order {...this.props.state} {...this.props} />

                    </div>
                }
                {this.props.state.order.current_order_status === 'order-not-started'  && this.props.state.data.entree_types.length > 0 &&
                        <SelectEntree
                            entreeTypes = {this.props.state.data.entree_types > 0  ? this.props.state.data.entree_types  : null }
                            selectEntree ={this.props.selectEntree}
                        /> 
                }

            </div>
        );
    }
}
export default Main;