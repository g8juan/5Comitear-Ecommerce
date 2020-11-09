import axios from "axios";
import { setOrder } from "../orders/ordersActionCreators";
import {success} from '../utils/logs'

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

export const setRecipient = (fullname) => ({
  type: "SET_ORDER_RECIPIENT",
  payload: fullname,
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

export const setAddress = (id, address) => (dispatch, getState) => {
  console.log("ENTRANDO A setAddress CON ORDER ID, " + id);
  console.log("ADDRESS" + address);

  axios
    .put(`http://localhost:8000/api/orders/update`, { orderId: id, address })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => success("orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const setAmount = (subtotal, id) => (dispatch, getState) => {
  console.log("ENTRANDO A setAmount CON subtotal, " + subtotal);
  console.log("ENTRANDO A setAmount CON orderId, " + id);
  axios
    .put(`http://localhost:8000/api/orders/update`, { orderId: id, subtotal })
    .then(({ data }) => dispatch(setOrder(data)))
    .then(() => success("orden actualizada con exito."))
    .catch((err) => console.log(err));
};

