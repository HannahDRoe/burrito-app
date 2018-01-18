import React from 'react';
import { base_ingredients } from '../data/base_ingredients';
import { IngredientGridItem } from './IngedientGridItem';
import { uniqueKey } from './uniqueKey';


export const IngredientsGrid = (props) =>{ 
  return  base_ingredients.map((base, i) =>{
        if (base.id === props.item){
            return (
                <IngredientGridItem key={uniqueKey+base.id} base = {base} />
            )
       }
    })
}
