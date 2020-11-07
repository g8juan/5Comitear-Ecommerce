import axios from 'axios';
import { INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY, SET_CART } from "../redux/constants";
import {getOrderId} from '../users/usersActionCreators'

const incrementProductQty = product => ({
    type: INCREMENT_PRODUCT_QUANTITY,
    payload: product
})

const decrementProductQty = product => ({
    type: DECREMENT_PRODUCT_QUANTITY,
    payload: product
})

const setCart = products => ({
    type: SET_CART,
    payload: products
})


export const increaseProductQuantity = (product) => dispatch => {
    dispatch(incrementProductQty(product))
}

export const decreaseProductQuantity = (product) => dispatch => {
    dispatch(decrementProductQty(product))
}

export const newOrder = () => (dispatch, getState) => 
axios.get(`http://localhost:8000/api/orders/new?${getState().users.user.id}`)

// chequear ruta del back
// export const getCart = (id) => (dispatch, getState) => {
//   console.log("entre al axios")
//     axios.get(`/api/cart/${id}`)
//     .then(res => res.data)
//     .then(products => dispatch(setCart(products)))
// }

export const getCart = () => (dispatch, getState) => {
  console.log("entre al axios")
    axios.get(`/api/cart/${getState().users.user.id}`)
    .then(res => res.data)
    .then(products => dispatch(setCart(products)))
}

export const showCart = () => async (dispatch, getState) => {
    await getOrderId(getState().users.order.id)
    dispatch(getCart())
  }


// export const getCart = () => (dispatch, getState) => {
//   console.log("entre al axios")
//     axios.get(`/api/orders/${getState().users.order.data.id}`)
//     .then(res => res.data)
//     .then(products => dispatch(setCart(products)))
// }