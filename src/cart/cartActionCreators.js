import axios from "axios";
import { setOrder } from "../orders/ordersActionCreators";
import { success } from "../utils/logs";
import store from "../redux/store";

const setCart = (products) => ({
  type: "SET_CART",
  payload: products,
});

export const resetCart = () => ({
  type: "RESET_CART",
});

export const setCartProduct = (product, userId) => ({
  type: "SET_CART_PRODUCT",
  payload: product,
  userId: userId,
});

export const getCart = (orderId) => (dispatch, getState) => {
  if (!orderId) {
    const productsJSON = localStorage.getItem("cartProducts");
    const products = productsJSON ? JSON.parse(productsJSON) : [];
    console.log("LOCAL STORAGE CART PRODUCTS", products);
    dispatch(setCart(products));
  } else
    axios.get(`/api/cart/${orderId}`).then(({ data }) => {
      console.log("/API/CART AXIOS DATA", data);
      dispatch(setCart(data.products));
    });
};

export const modifyCartLocalStorage = async (product, quantity) => {
  const productsJSON = localStorage.getItem("cartProducts");
  console.log("PRODUCTS JSON", productsJSON);
  let products = productsJSON ? JSON.parse(productsJSON) : [];
  console.log("PARSED PRODUCTS JSON", products);
  let cartProduct = products.find((e) => e.id === product.id);
  console.log("CART PRODUCT TO ADD/MODIFY: ", cartProduct);
  if (typeof cartProduct !== "object") {
    console.log("CART PRODUCT NOT FOUND, ADDING IT...");
    cartProduct = { ...product, order_product: { quantity: 1 } };
    console.log("CART PRODUCT ADDED: ", cartProduct);
  }
  cartProduct.order_product.quantity += quantity;
  console.log("CART PRODUCT AFTER ADDING QUANITTY: ", cartProduct);
  return cartProduct.order_product.quantity > 0 ? cartProduct.order_product : null;
};

export const modifyCartAPI = async (product, quantity) => {
  const res = await axios.post(`/api/cart/modify`, {
    orderId: store.getState().orders.order.id,
    productId: product.id,
    quantity,
  });
  console.log(res.data);
  return res.data;
};

export const modifyCart = (product, quantity = 1) => async (dispatch, getState) => {
  let res;
  const userId = getState().users.user.id;
  console.log("GET STATE CART PRODUCTS,", getState().cart);
  const cart = getState().cart;

  //If there is user, fetch data from db
  if (userId) res = await modifyCartAPI(product, quantity);
  //if there is no user, fetch data from localStorage
  else res = await modifyCartLocalStorage(product, quantity);

  console.log("RESSSSSS", res);
  console.log("cart", cart);

  const index = cart.findIndex((e) => e.id === product.id); //-1
  if (index === -1) {
    dispatch(setCartProduct(cart.concat([{ ...product, order_product: res }])), userId);
  } else {
    const productsCopy = [...cart];
    if (res) {
      productsCopy[index].order_product = res; //esta res.data es order_product
      dispatch(setCartProduct(productsCopy, userId));
    } else {
      productsCopy.splice(index, 1);
      dispatch(setCartProduct(productsCopy, userId));
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
  return axios
    .post("/api/send/email", { order: order, products: products, email: email })
    .then(({ data }) => console.log(data));
};

export const setStatus = (id, status) => (dispatch) => {
  console.log("ENTRANDO A setStatus CON status ", status);
  console.log("ENTRANDO A setStatus CON orderId ", id);
  return axios
    .put(`/api/orders/update`, { orderId: id, status: status })
    .then(({ data }) => console.log("orden actualizada a status COMPLETED", data))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};
