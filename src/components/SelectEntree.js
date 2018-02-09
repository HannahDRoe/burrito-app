import React from 'react';

import EntreesBtn from './EntreesBtn';

const SelectEntree = (props) => {
    return (
        <div>
            <div>Choose an Entree</div>
            {props.entreeTypes.map((entrees, i) =>
                <EntreesBtn 
                    key={entrees.id} 
                    entree={entrees.name} 
                    description={entrees.description} 
                    categories= {entrees.included_ingredient_category_ids} 
                    id={entrees.id} 
                    selectEntree = {props.selectEntree}
                    />
            )}

        </div>

    );


}


export default SelectEntree;