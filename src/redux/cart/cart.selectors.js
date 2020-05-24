import { createSelector } from 'reselect';

//two types of selectors we can write
// input selector
// output selector (it uses createSelector)

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[ selectCart ], //a collection, array of input selectors
	(cart) => cart.cartItems //output
);

export const selectCartHidden = createSelector([ selectCart ], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);
