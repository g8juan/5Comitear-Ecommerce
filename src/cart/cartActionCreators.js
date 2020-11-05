import axios from 'axios';
import { INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY, SET_PRODUCTS_IN_CART } from "../redux/constants";

const incrementProductQty = product => ({
    type: INCREMENT_PRODUCT_QUANTITY,
    payload: product
})

const decrementProductQty = product => ({
    type: DECREMENT_PRODUCT_QUANTITY,
    payload: product
})

const setProductsInCart = products => ({
    type: SET_PRODUCTS_IN_CART,
    payload: products
})


export const increaseProductQuantity = (product) => dispatch => {
    dispatch(incrementProductQty(product))
}

export const decreaseProductQuantity = (product) => dispatch => {
    dispatch(decrementProductQty(product))
}

// chequear ruta del back
export const getProductsInCart = (userId) => dispatch => {
  console.log("entre al axios")
    axios.get("/api/orders/getUserCartData", {params:{userId:2}})
    .then(res => res.data)
    .then(products => dispatch(setProductsInCart(products)))
}