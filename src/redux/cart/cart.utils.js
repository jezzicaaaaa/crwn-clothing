export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	if (existingCartItem) {
		//if it is not undefined
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		); //we need to return new version of state so it rerenders
	}

	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};
