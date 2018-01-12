import { createStore, compose } from 'redux';
import shortid from 'shortid';

import rootReducer from './reducers/rootReducer';

// import{ entree_types } from './data/entree_types';

// import {base_ingredients } from './data/base_ingredients';

let generateOrderId= shortid.generate();

const defaultState = {
    order: {
        id: generateOrderId,
        entree_selected:{
            id: null
        }
    }
}

const enhancers = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, defaultState,  enhancers );


export default store;