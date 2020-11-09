import axios from 'axios';
import {info} from '../utils/logs'

const setCart = products => ({
  type: "SET_CART",
  payload: products
})

export const resetCart = () => ({
  type: "RESET_CART",
})

export const setCartProduct = (product) => ({
  type: "SET_CART_PRODUCT",
  payload: product
})

export const getCart = (orderId) => (dispatch) => axios.get(`/api/cart/${orderId}`).then(({data}) => dispatch(setCart(data)))

export const modifyCart = (product, quantity=1) => async (dispatch, getState) => {

  const res = await axios.post(`/api/cart/modify`, {orderId: getState().orders.order.id, productId: product.id, quantity})
  const products = getState().cart.products
  const index = products.findIndex(p => p.id === product.id) //-1
  if (index === -1) {
    dispatch(setCartProduct(products.concat([{ ...product, order_product: res.data}])));
  } else {
    const productsCopy = [...products];
    if (res.data) {
      productsCopy[index].order_product = res.data; //esta res.data es order_product
      dispatch(setCartProduct(productsCopy));
    } else {
      productsCopy.splice(index,1)
      dispatch(setCartProduct(productsCopy));
    }
  }
}











// export const getCart = () => (dispatch, getState) => {
//   console.log("entre al axios")
//     axios.get(`/api/orders/${getState().users.order.data.id}`)
//     .then(res => res.data)
//     .then(products => dispatch(setCart(products)))
// }