import React from 'react';
import { entree_types } from '../data/entree_types';
import EntreesBtn from './EntreesBtn';


class SelectMealBtns extends React.Component {

    render() {
        return (

            <div className = {this.props.state.order.entree_selected.id !== null  ? 'hidden' : 'chooseEntree'}>
                <div>Choose an Entree</div>
                {entree_types.map((entrees, i) =>
                    <EntreesBtn   i={i} 
                        key={i+entrees.id} 
                        entree={entrees.name} 
                        description={entrees.description} 
                        categories= {entrees.included_ingredient_category_ids} 
                        id={entrees.id} 
                        {...this.props} />
                )}

            </div>

        );

    }
}

export default SelectMealBtns;