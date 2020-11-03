import { combineReducers } from "redux";
import usersReducer from "../users/usersReducer";

export default combineReducers({
  users: usersReducer,
});
