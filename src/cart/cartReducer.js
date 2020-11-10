const initialState = {
  products: [],
  order: {},
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CART":
      return action.payload;
    case "RESET_CART":
      return initialState;
    case "SET_CART_PRODUCT":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
export default cartReducer;
