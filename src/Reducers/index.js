import { combineReducers } from 'redux';
import user from './user_reducer';
import product from './product_reducers';
const rootReducer = combineReducers({
user,
product
})

export default rootReducer;