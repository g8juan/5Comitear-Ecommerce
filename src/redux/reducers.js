import { combineReducers } from "redux";
import productsReducer from '../products/productsReducers'
import cartReducer from "../cart/cartReducer"
import usersReducer from "../users/usersReducer";
import categoriesReducer from "../categories/categoriesReducer"
import ordersReducer from '../orders/ordersReducer'

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  orders: ordersReducer
});
