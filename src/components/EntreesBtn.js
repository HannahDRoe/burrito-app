import React from 'react';


const EntreesBtn = (props) =>{
    let {entree, id, description, categories, toggleHidden, selectEntree} = props;

    return(
        <div value={id} onClick={selectEntree.bind(null, id, [...categories])} >
            <h4>{entree}</h4>
            <p> {description} </p>
        </div>
    )

}   


export default EntreesBtn;