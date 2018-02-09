import React from 'react';
import { IngredientsList } from './IngredientsList';
import { uniqueKey } from'./uniqueKey';

class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIngredientCategory: 'entree-protein-category',
            ingredientCategories: [],
            minIngredientsRequired: 1,
            maxIngredentsAllowed: 1
        }
        this.handleClick = this.handleClick.bind(this); 
    }


componentDidMount(){
    this.state.options.entree_types.map((types) =>{
        if(types.id === this.props.state.order.entree_selected.id){
            return this.setState({
                ingredientCategories:  types.included_ingredient_category_ids
                
            });
        }
    });   
}

// componentWillReceiveProps(nextProps){
//     if (this.props.order.entree_selected.ingredients_selected.length !== this.nextProps ) {
//         this.limitIngredients();
//     } 
// }

handleClick(e){
   this.setState({
    selectedIngredientCategory: e
   }, () => this.checkCategoryLimits())

}

checkCategoryLimits(){
    return this.state.options.ingredient_categories.map((category) =>{
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
                        baseIngredients = {this.state.options.base_ingredients}
                        key={uniqueKey + '-' + item}  
                        item = {item}
                        category = {this.state.selectedIngredientCategory}
                        maxIngredentsAllowed = {this.state.maxIngredentsAllowed}
                        {...this.props}
                       /> 
            }
        )}
    })
}

 findCategoryIds(category){
    const findIngredients = this.state.options.ingredient_categories.find((value, id) =>{
         if( value.id === category){
            return  value.name
         }
     });
    
        return <li key = {'cat'+findIngredients.id} value={findIngredients.id} onClick={() => this.handleClick(findIngredients.id)}>{findIngredients.name}</li>
 };

displayIngredientCategories(){
    const ingredientItems = this.state.ingredientCategories.map((category) =>{
        return this.findCategoryIds(category); 
    });
   return ingredientItems;
};

// limitIngredients(){
//         let  entreeSelectedIngredients= this.props.state.order.entree_selected.ingredients_selected;

//         let filtered = entreeSelectedIngredients.filter((selected) =>{
//             if(selected.category === this.state.selectedIngredientCategory ){
//                 return selected;
//             }
//             });
//             console.log(filtered)
//         let filteredItemId;    
//         if (filtered.length >= this.state.maxIngredentsAllowed ) {
//             return ( filteredItemId = filtered[0].id,
//                 // console.log('yes we reacehed the max '+ filtered[0].id),
//                 // console.log('filteredItemId = ' +filteredItemId ),
//                 this.findIngredientsIndex(filteredItemId)
//             )
//         }
//         // let findIngredientsIndex =  this.props.state.order.entree_selected.ingredients_selected.findIndex(obj => obj.id ===filteredItemId);
//         // console.log(filteredItemId);

//         // return this.props.removeIngredientWhenMaxLimitIsReached(findIngredientsIndex);
          

// };
// findIngredientsIndex(filteredItemId){
//    let index=  this.props.state.order.entree_selected.ingredients_selected.findIndex(obj => obj.id === filteredItemId);
//    console.log(index)
//     return this.props.removeIngredientWhenMaxLimitIsReached(index)

// }
    render() {
        return (
            <div>
                
               <ul> 
                    {this.state.ingredientCategories !== [] && this.displayIngredientCategories()}
                </ul>
                <h5>{this.state.minIngredientsRequired <1  ? 'Pile \'em on' : 'Please Select '+ `${this.state.minIngredientsRequired}`} </h5> 
                <div> {this.displayIngredientList(this.state.options.ingredient_categories)} </div>
                

            </div>
        );
    }


}

export default IngredientsSelection;