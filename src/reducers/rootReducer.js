import { combineReducers } from 'redux';


import orderMain from './orderReducer';
import databyId from './dataReducer';

const rootReducer = combineReducers({ order: orderMain , data: databyId});

export default rootReducer;