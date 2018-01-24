import React from 'react';
import { ingredient_categories } from '../data/ingredient_categories';
import { IngredientsList } from './IngredientsList';
import { uniqueKey } from'./uniqueKey';
import { entree_types } from '../data/entree_types.js'

class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIngredientCategory: null,
            ingredientCategories: [],
            minIngredientsRequired: null,
            maxIngredentsAllowed: null

        }
        this.handleClick = this.handleClick.bind(this); 
    
    }


componentDidMount(){
    entree_types.map((types) =>{
        if(types.id === this.props.state.order.entree_selected.id){
            return this.setState({
                ingredientCategories:  types.included_ingredient_category_ids
                
            });
        }
    });   
    

}
componentDidUpdate(){
}

handleClick(e){
   this.setState({
    selectedIngredientCategory: e
   }, () => this.checkCategoryLimits());
}

checkCategoryLimits(){
    return ingredient_categories.map((category) =>{
        // console.log(category)
        if (category.id === this.state.selectedIngredientCategory) {
            console.log('hi this is state ' +this.state.selectedIngredientCategory)
            return  this.setState({
                minIngredientsRequired: category.min_required,
                maxIngredentsAllowed: category.max_limit
            })
        }
    })

}

displayIngredientList(categories){

   return categories.map((ingredient, i) =>{
          if(ingredient.id === this.state.selectedIngredientCategory){
              return ingredient.base_ingredients_included_ids.map((item, i) =>{
              return  <IngredientsList 
                        key={uniqueKey + '-' + item}  
                        item = {item}
                        category = {this.state.selectedIngredientCategory}
                        {...this.props}
                       /> 
            }
        )}
    })
}




 findCategoryIds(category){
    const findIngredients = ingredient_categories.find((value, id) =>{
         if( value.id === category){
            return  value.name
         }
     });
    
        return <li key = {'cat'+findIngredients.id} value={findIngredients.id} onClick={() => this.handleClick(findIngredients.id)}>{findIngredients.name}</li>
 };

displayIngredientCategories(){
    const ingredientItems = this.state.ingredientCategories.map((category) =>{
        return this.findCategoryIds(category) 
    });
   return ingredientItems;
}

    render() {
        return (
            <div>
                
               <ul> 
                    {this.state.ingredientCategories !== [] && this.displayIngredientCategories()}
                </ul>
                 {this.state.minIngredientsRequired !== null && <h5>{this.state.minIngredientsRequired <1  ? 'Pile \'em on' : 'Please Select '+ `${this.state.minIngredientsRequired}`} </h5> }
                {this.state.selectedIngredientCategory !== null && <div> {this.displayIngredientList(ingredient_categories)} </div>}

            </div>
        );
    }


}

export default IngredientsSelection;