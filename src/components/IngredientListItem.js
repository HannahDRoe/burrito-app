import React from 'react';
import { uniqueKey } from './uniqueKey';

export const IngredientListItem = (props) =>{
    let  { base , index }  = props;
    return(      
        <div key={uniqueKey} onClick={props.addToOrder.bind(null, base.id, base.name, base.price, props.category)}>
            {/* <img src={base.img_src}  alt = {base.name}/> */}
            <p>{base.name} 
            {base.price > 0 && <span> {(base.price /100).toFixed(2)}</span>}
            </p>
        </div>
    )
}