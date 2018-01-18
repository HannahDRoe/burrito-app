import React from 'react';
import SelectEntree  from './components/SelectEntree';
import IngredientsSelection from './components/IngredientsSelection';
import { GoBackButton } from './components/GoBackButton';

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
            <div>
                
                {this.state.showIngredientGrid && <GoBackButton toggleHidden = {this.toggleHidden} />}

                {!this.state.showIngredientGrid && 
                        <SelectEntree {...this.props} 
                        toggleHidden = {this.toggleHidden}/> 
                }

                {this.state.showIngredientGrid &&
                <IngredientsSelection {...this.props.state} />
                }
            </div>
        );
    }
}
export default Main;