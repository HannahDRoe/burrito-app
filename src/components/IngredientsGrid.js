import React from 'react';

function IngredentsGrid () {
  
    const ingredientsList = ingredients.map( (foodItem)  => {
        // console.log(foodItem);
        if (foodItem.meals.includes(props.mealType)) {
            return (
                <div key ={foodItem.id} className='foodItem'>
                     <div>{foodItem.name}</div>
                     {foodItem.price > 0 && <div> ${foodItem.price.toFixed(2)} </div>}
                     {foodItem.addExtra !== 0 && <div className="foodItemAddExtra"> Add Extra? ${foodItem.addExtra.toFixed(2) } </div>  }
                 </div> 
            )
        } else {
                <div>Empty</div>

        }
    });
    return (
        <div>{ingredientsList}</div>
    )
       

}
export default IngredentsGrid;