import { combineReducers } from "redux";
import productsReducer from '../products/productsReducers'

export default combineReducers({
  //users: usersReducer,
  products: productsReducer
  //cart: cartReducer
});