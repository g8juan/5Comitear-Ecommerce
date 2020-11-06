import axios from 'axios';
import { INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY, SET_CART } from "../redux/constants";

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

export const newOrder = (userId) => () => axios.get(`http://localhost:8000/api/orders/new?${userId}`)

// chequear ruta del back
export const getCart = (userId) => dispatch => {
  console.log("entre al axios")
    axios.get("/api/orders/getCart", {params:{userId:2}})
    .then(res => res.data)
    .then(products => dispatch(setCart(products)))
}