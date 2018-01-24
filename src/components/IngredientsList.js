import React from 'react';
import { base_ingredients } from '../data/base_ingredients';
import { IngredientListItem } from './IngredientListItem';
import { uniqueKey } from './uniqueKey';


export const IngredientsList = (props) =>{ 
  return  base_ingredients.map((base, i) =>{
        if (base.id === props.item){
            return (
                <IngredientListItem 
                    addToOrder={props.addToOrder}
                    key={uniqueKey+base.id} 
                    base = {base}
                    index = {i}
                    category = {props.category}
                    />
            )
       }
    })
}
