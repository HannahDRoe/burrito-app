import { createStore, compose } from 'redux';
import { uniqueKey } from './components/uniqueKey';

import rootReducer from './reducers/rootReducer';

// import{ entree_types } from './data/entree_types';

// import {base_ingredients } from './data/base_ingredients';


const defaultState = {
    order: {
         id:  uniqueKey ,
        orderConfimationStatus: 'not-confirmed', // 'not-confirmed' 'confirming' 'confirmed'
        entree_selected:{
            id: null,
            ingredients_selected: []
        },
        add_to_total_order_price: {
            total: 0
        }
    }
}

const enhancers = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, defaultState,  enhancers );


export default store;