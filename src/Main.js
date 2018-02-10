import React from 'react';
import SelectEntreeList  from './components/SelectEntreeList';
import IngredientsSelection from './components/IngredientsSelection';
import Order  from './components/Order';
import Button  from './components/Button';

class Main extends React.Component {
    constructor(props){
        super(props)
    }
componentWillMount() {
    this.props.getAllData();
}
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

     
           {this.props.state.order.current_order_status === 'order-not-started' && this.props.state.data.entree_types && this.props.state.data.entree_types.map(entrees => {
            return   <SelectEntreeList 
                        key={entrees.id} 
                        entree={entrees.name} 
                        description={entrees.description} 
                        categories= {entrees.included_ingredient_category_ids} 
                        id={entrees.id} 
                        selectEntree = {this.props.selectEntree}
                        />
                }
            )}
                
                       

            </div>
        );
    }
}
export default Main;