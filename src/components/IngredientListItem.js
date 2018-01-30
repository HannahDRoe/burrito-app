import React from 'react';
import { uniqueKey } from './uniqueKey';

class IngredientListItem extends React.Component{
    constructor(props){
        super(props)
    }
  
limitIngredients(){

    let filtered = this.props.ingredients.filter((selected) =>{
        if(selected.category === this.props.category ){
            return selected;
        }
    });

    console.log(filtered)
    let filteredItemId;    
    // console.log('max '+ this.props.maxIngredentsAllowed)
    if (filtered.length >= this.props.maxIngredentsAllowed ) {
        return ( filteredItemId = filtered[0].id,
            // console.log('yes we reacehed the max '+ filtered[0].id),
            console.log('filteredItemId = ' +filteredItemId ),
            this.findIngredientsIndex(filteredItemId)
        )
    }          
};
findIngredientsIndex(filteredItemId){

   let index=  this.props.ingredients.findIndex(obj => obj.id === filteredItemId);
   console.log(index)
    return this.props.removeIngredientWhenMaxLimitIsReached(index)

}
addAndCheckLimitOfOrder(id, name, price, category){
    // , limitHit
    // if (limitHit) {
    //     //fire replace oldest ingriendant in category
    // }
    // else {
    //     //fire add
    // }
    // this.limitIngredients()
    this.props.addToOrder(id, name, price, category)
}

render(){
    let  base = this.props.base;

    return(      
        
        <div key={uniqueKey} onClick={() => {this.addAndCheckLimitOfOrder(base.id, base.name, base.price, this.props.category)}}>
            {/* <img src={base.img_src}  alt = {base.name}/> */}
            <p>{base.name} 
                { base.price > 0 && <span> {(base.price /100).toFixed(2)}</span>}
            </p>
        </div>
    )}

}
export default IngredientListItem;