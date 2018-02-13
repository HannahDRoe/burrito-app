import React from 'react';
import  IngredientListItem  from './IngredientListItem';
import { uniqueKey } from './uniqueKey';


export const IngredientsList = (props) =>{ 
  return  props.baseIngredients.map((base, i) =>{
        if (base.id === props.item){
            return (
                <div key ={uniqueKey+i}>
                    <IngredientListItem 
                        addToOrder={props.addToOrder}
                        key={uniqueKey+base.id} 
                        base = {base}
                        category = {props.category}
                        maxIngredentsAllowed = {props.maxIngredentsAllowed}
                        removeIngredientWhenMaxLimitIsReached ={props.removeIngredientWhenMaxLimitIsReached}
                        ingredients = {props.order.entree_selected.ingredients_selected} 
                        />
                    </div>
            )
       }
    })
}