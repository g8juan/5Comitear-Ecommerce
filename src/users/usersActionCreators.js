import axios from "axios";
import { success } from "../utils/logs";
import { getOrder, resetOrder } from "../orders/ordersActionCreators";
import { resetCart } from "../cart/cartActionCreators";

export const setLogin = (user) => ({
  type: "SET_LOGIN",
  payload: user,
});

export const setErrorLogin = (error) => ({
  type: "SET_ERROR_LOGIN",
  payload: error,
});

export const setLogout = () => ({
  type: "SET_LOGOUT",
});

export const login = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login", user, {
      withCredentials: true,
    });
    dispatch(setLogin(res.data));
  } catch (err) {
    dispatch(setErrorLogin(true));
  }
  dispatch(getOrder())
};

export const logOut = () => (dispatch) => {
  axios
    .get("/api/users/logout")
    .then(() => dispatch(setLogout()))
    .then(() => success("usuario desloggeado con exito", ""));
  dispatch(resetOrder());
  dispatch(resetCart());
};
