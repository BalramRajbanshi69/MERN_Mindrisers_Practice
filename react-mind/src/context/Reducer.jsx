const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c._id === action.payload._id
            ? { ...c, quantity: action.payload.quantity }
            : c
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
