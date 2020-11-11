import axios from "axios";
import { setOrder } from "../orders/ordersActionCreators";
import { success } from '../utils/logs'

const setCart = (products) => ({
  type: "SET_CART",
  payload: products,
});

export const resetCart = () => ({
  type: "RESET_CART",
});

export const setCartProduct = (product) => ({
  type: "SET_CART_PRODUCT",
  payload: product,
});

export const getCart = (orderId) => (dispatch) =>
  axios.get(`/api/cart/${orderId}`).then(({ data }) => dispatch(setCart(data)));

export const modifyCart = (product, quantity = 1) => async (dispatch, getState) => {
  console.log("ENTRANDO EN modifyCart");
  const res = await axios.post(`/api/cart/modify`, {
    orderId: getState().orders.order.id,
    productId: product.id,
    quantity,
  });
  const products = getState().cart.products;
  const index = products.findIndex((p) => p.id === product.id); //-1
  if (index === -1) {
    dispatch(setCartProduct(products.concat([{ ...product, order_product: res.data }])));
  } else {
    const productsCopy = [...products];
    if (res.data) {
      productsCopy[index].order_product = res.data; //esta res.data es order_product
      dispatch(setCartProduct(productsCopy));
    } else {
      productsCopy.splice(index, 1);
      dispatch(setCartProduct(productsCopy));
    }
  }
};

export const setAddress = (id, address) => (dispatch) => {
  axios
    .put(`/api/orders/update`, { orderId: id, address })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const setAmount = (subtotal, id) => (dispatch) => {
  return axios
    .put(`/api/orders/update`, { orderId: id, subtotal })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const setRecipient = (id, fullName) => (dispatch) => {
  console.log("ENTRANDO A setRecipient CON fullName, ", fullName);
  console.log("ENTRANDO A setRecipient CON orderId, ", id);
  return axios
    .put(`/api/orders/update`, { orderId: id, fullName })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};



export const sendEmail = (email, products, order) => (dispatch) => {
  console.log("ENTRANDO A sendEmail CON email, products, order", email, products, order);
  return axios.post('/api/send/email', { order: order, products: products, email: email })
    .then(({ data }) => console.log(data))
}