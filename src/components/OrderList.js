import React from 'react';
import {uniqueKey} from './uniqueKey';


export const OrderList = (props) =>{ 
  const selectedIngedientsArray = props.order.entree_selected.ingredients_selected;
  if (selectedIngedientsArray.length > 0) {
     return props.order.entree_selected.ingredients_selected.map((orderItem, i) =>{
      return   <li key={uniqueKey+ '-' + i}>{orderItem.name}</li>              
         })
    }else {
      return "Load it Up!";
    }
  }
  
  