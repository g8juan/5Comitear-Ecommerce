import { combineReducers } from "redux";
import reducerCart from "../cart/reducerCart"

export default combineReducers({
  cart: reducerCart
});