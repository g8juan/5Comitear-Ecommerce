const initialState = {
  order: {},
  orderList: [],
  address: ''
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ORDER":
      return { ...state, order: action.payload };
    case "RESET_ORDER":
      return initialState
    // case "SET_ORDER_LIST": // TODO:(PARA ADMIN)
    //   return { ...state, orderList: action.payload };
    case "SET_ORDER_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
}
