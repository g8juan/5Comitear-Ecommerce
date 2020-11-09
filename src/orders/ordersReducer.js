const initialState = {
  order: {},
  orderList: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ORDER":
      return { ...state, order: action.payload };
    case "RESET_ORDER":
      return initialState
    // case "SET_ORDER_LIST": // TODO:(PARA ADMIN)
    //   return { ...state, orderList: action.payload };
    default:
      return state;
  }
}
