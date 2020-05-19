const INITIAL_STATE = {
	currentUser: null
};

// default parameter value, if state is ever undefined, it will assign the default value that we set
const userReducer = (state = INITIAL_STATE, action) => {
	// state is whatever state it is currently when the action gets fired
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state, //everything else in the state
				currentUser: action.payload // plus the state you are modifying
			};

		default:
			return state;
	}
};

export default userReducer;
