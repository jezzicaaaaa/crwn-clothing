// All the reducers that we will be writing will go here.
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer
});
