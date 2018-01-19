import React from 'react';
import {uniqueKey} from './uniqueKey';


export const OrderList = (props) =>{ 

    return  props.order.orderList.map((orderItem, i) =>{
             
               return   <li key={uniqueKey+ '-' + i}>{orderItem.name}</li>
              
         })
  }
  
  