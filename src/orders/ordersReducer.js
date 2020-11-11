const initialState = {
  order: {},
  orderList: [],
  ordersList: [],
  adminOrdersList: [],
  orderCardNumber: ''
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ORDER":
      return { ...state, order: action.payload };
    case "RESET_ORDER":
      return initialState
    case "SET_ORDERS_LIST":
      return { ...state, ordersList: action.payload };
    case "SET_CARD_NUMBER":
      return { ...state, orderCardNumber: action.payload };
    default:
      return state;
  }
}
