import React from 'react';
import { base_ingredients } from '../data/base_ingredients';
import { IngredientListItem } from './IngredientListItem';
import { uniqueKey } from './uniqueKey';


export const IngredientsList = (props) =>{ 
  return  base_ingredients.map((base, i) =>{
        if (base.id === props.item){
            return (
                <div key ={uniqueKey+i} onClick={() => {props.limitIngredients}}>
                    <IngredientListItem 
                        addToOrder={props.addToOrder}
                        key={uniqueKey+base.id} 
                        base = {base}
                        index = {i}
                        category = {props.category}
                        ingredients = {props.order.entree_selected.ingredients_selected} 
                        />
                    </div>
            )
       }
    })
}
