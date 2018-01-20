import React from 'react';
import SelectEntree  from './components/SelectEntree';
import IngredientsSelection from './components/IngredientsSelection';
import Order  from './components/Order';
import StartOverButton  from './components/StartOverButton';

class Main extends React.Component {
    constructor () {
        super()
        this.state = {
          showIngredientGrid: false
        }

        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden(){
        this.setState({
        showIngredientGrid: !this.state.showIngredientGrid

        });
    }

    render() {
        return (
            <div className='mainContainer'>
                
                {this.state.showIngredientGrid && <StartOverButton toggleHidden = {this.toggleHidden} {...this.props}/>}

                {!this.state.showIngredientGrid && 
                        <SelectEntree {...this.props} 
                        toggleHidden = {this.toggleHidden}/> 
                }

                {this.state.showIngredientGrid &&
                <IngredientsSelection {...this.props.state} {...this.props}/>
                }
               <Order {...this.props.state} />
            </div>
        );
    }
}
export default Main;