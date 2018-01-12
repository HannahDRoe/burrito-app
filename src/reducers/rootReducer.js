import { combineReducers } from 'redux';

import orderMain from './orderReducer';

const rootReducer = combineReducers({ order: orderMain });

export default rootReducer;