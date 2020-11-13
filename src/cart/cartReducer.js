
const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CART":
      return action.payload
    case "SET_UNIFIED_CART":
      return action.payload
    case "RESET_CART":
      return initialState;
    case "SET_CART_PRODUCT":
      return action.payload;
    case "SET_LOCALSTATE_CART_PRODUCT":
      return action.payload;
    default:
      return state;
  }
}
export default cartReducer;

