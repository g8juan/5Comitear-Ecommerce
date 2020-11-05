const initialState = {
  user: {},
  userList: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: { email: "", password: "" } };

    default:
      return state;
  }
}
