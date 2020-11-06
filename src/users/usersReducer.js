const initialState = {
  user: {},
  userList: [],
  error: false,
  order: {}
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: { email: "", password: "" } };
    case "ERROR_LOGIN":
      return { ...state, error: action.error };
      case "SET_ORDER":
        return { ...state, order: action.payload };
    default:
      return state;
  }
}
