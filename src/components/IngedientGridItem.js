import React from 'react';
import { uniqueKey } from './uniqueKey';

export const IngredientGridItem = (props) =>{
    let  { base }  = props;
    return(
        <div key={uniqueKey}>
            <img src={base.img_src}  alt = {base.name}/>
            <p>{base.name}</p>
         </div>
    )
}