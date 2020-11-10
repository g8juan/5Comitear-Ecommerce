const initialState = {
  user: {},
  error: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, user: action.payload };
    case "SET_ERROR_LOGIN":
      return { ...state, error: action.payload };
    case "SET_LOGOUT":
      return initialState;
    default:
      return state;
  }
}
