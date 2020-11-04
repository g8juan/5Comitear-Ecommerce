import { combineReducers } from "redux";
import productsReducer from '../products/productsReducers'
import usersReducer from "../users/usersReducer";

export default combineReducers({
  
  users: usersReducer,
  products: productsReducer
  //cart: cartReducer
  
});
