import axios from "axios";
import { success } from "../utils/logs";
import {getCart} from '../cart/cartActionCreators'

export const setOrder = (order) => ({
  type: "SET_ORDER",
  payload: order,
});

export const resetOrder = () => ({
  type: "RESET_ORDER",
});

export const setOrdersList = (ordersList) => ({
  type: "SET_ORDERS_LIST",
  payload: ordersList,
});

export const setCardNumber = (number) => ({
  type: "SET_CARD_NUMBER",
  payload: number,
});

export const setSingleOrder = (singleOrder) => ({
  type: "SET_SINGLE_ORDER",
  payload: singleOrder
})

export const postOrder = (id) => (dispatch) => {
  axios
    .post(`http://localhost:8000/api/orders/new`, { userId: id })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => {success("Orden creada con exito")})
    .catch((err) => console.log(err));
};

export const getOrder = () => (dispatch, getState) => {
  axios
    .get(`/api/orders/${getState().users.user.id}`)
    .then((res) => dispatch(setOrder(res.data)))
    .then(()=>dispatch(getCart()))
    .catch((err) => console.log(err));  
};

export const getOrdersList = () => (dispatch, getState) => {
  axios
    .get(`/api/orders/list/${getState().users.user.id}`)
    .then(({ data }) => {
      dispatch(setOrdersList(data));
    })
    .then(() => success("listado de ordenes traida con exito"))
    .catch((err) => console.log(err));
};

export const setCard = (number) => (dispatch) => {
  console.log("ENTRANDO A setCard CON number, ", number);
  dispatch(setCardNumber(number));
};

export const selectSingleOrder = (id) => (dispatch) => {
  axios.get(`/api/cart/${id}`)
    .then((res) => dispatch(setSingleOrder(res.data)))
    .catch(err => console.log(err))
}