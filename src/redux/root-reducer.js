// All the reducers that we will be writing will go here.
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});
