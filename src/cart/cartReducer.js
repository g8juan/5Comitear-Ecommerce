
const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CART":
      return action.payload
    case "RESET_CART":
      return initialState;
    case "SET_CART_PRODUCT":
      if (!action.userId) localStorage.setItem("cartProducts",JSON.stringify(action.payload))
      return action.payload;
    default:
      return state;
  }
}
export default cartReducer;
