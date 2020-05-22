import { createSelector } from 'reselect';

//two types of selectors we can write
// input selector
// output selector (it uses createSelector)

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[ selectCart ], //a collection, array of input selectors
	(cart) => cart.cartItems //output
);

export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accumulatedQuantity, carItem) => accumulatedQuantity + carItem.quantity, 0)
);
