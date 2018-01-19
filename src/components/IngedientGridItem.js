import React from 'react';
import { uniqueKey } from './uniqueKey';

export const IngredientGridItem = (props) =>{
    let  { base , index }  = props;
    return(
        <div key={uniqueKey} onClick={props.addToOrder.bind(null, index, base.id, base.name)}>
            {/* <img src={base.img_src}  alt = {base.name}/> */}
            <p>{base.name}</p>
            {base.price > 0 && <p> {(base.price /100).toFixed(2)}</p>}
            {
                base.can_add_extra && base.additional_price_for_extra >0 && <p>Add extra? {(base. additional_price_for_extra /100).toFixed(2)}</p>
            }
         </div>
    )
}