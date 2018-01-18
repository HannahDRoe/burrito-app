import React from 'react';
import { ingredient_categories, displayIngredientCategories } from '../data/ingredient_categories';
import { IngredientsGrid } from './IngredientsGrid';
import { uniqueKey } from'./uniqueKey';

class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIngredientCategory: null
        }
        this.handleClick = this.handleClick.bind(this); 
    
    }

handleClick(e){
   this.setState({
    selectedIngredientCategory: e
   })
}

displayIngredientList(categories){
   return categories.map((ingredient, i) =>{
          if(ingredient.id === this.state.selectedIngredientCategory){
              return ingredient.base_ingredients_included_ids.map((item, i) =>{
              return  <IngredientsGrid key={uniqueKey + '-' + item}  item = {item}/> 
            }
        )}
    })
}


    render() {
        // console.log(' Catagories ' +this.state.numberOfCategories);
        return (
            <div>
                
               <ul> {displayIngredientCategories(this.props.order.entree_selected.categories, ingredient_categories, this.handleClick) } </ul>
                 {this.state.selectedIngredientCategory !== null && <div> {this.displayIngredientList(ingredient_categories)} </div>}

            </div>
        );
    }


}

export default IngredientsSelection;