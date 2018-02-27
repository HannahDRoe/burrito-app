import { createStore, compose, applyMiddleware} from 'redux';
import { uniqueKey } from './components/uniqueKey';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import { getAllData } from './actions/actionCreators';


const defaultState = {
    order: {
        id:  uniqueKey ,
        current_order_status: 'entree-not-started',
        orderConfimationStatus: 'not-confirmed', // 'not-confirmed' 'confirming' 'confirmed'
        current_entree:{
            id: null,
            current_ingredient_category: null,
            ingredients_selected: []
        },
        completed_entrees:[],
        total: 0
    }
}
const enhancers = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    rootReducer, 
    defaultState,
    compose(
        applyMiddleware(thunk),
        enhancers
    )
    
);


store.dispatch(getAllData())

export default store;