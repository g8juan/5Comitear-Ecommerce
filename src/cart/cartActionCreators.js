import axios from "axios";
import {setOrder} from "../orders/ordersActionCreators";
import {success} from "../utils/logs";

const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

const setUnifiedCart = (cart) => ({
  type: "SET_UNIFIED_CART",
  payload: cart,
});

export const resetCart = () => ({
  type: "RESET_CART",
});

export const setCartProduct = (product, userId) => ({
  type: "SET_CART_PRODUCT",
  payload: product,
  userId: userId,
});

export const setLSCartProduct = (product) => ({
  type: "SET_LOCALSTATE_CART_PRODUCT",
  payload: product,
});


export const getCart = () => async (dispatch, getState) => {
  const cartJSON = localStorage.getItem("cartProducts");
  const LScart = cartJSON ? JSON.parse(cartJSON) : [];
  const orderId = getState().orders.order.id

  //*Si existe algo en el Local Storage hace unifica los dos carritos antes de dispatchear
  if (LScart.length) {
    //const orderId = store.getState().orders.order.id
    async function postLStoDB() {
      for (let i = 0; i < LScart.length; i++) {
        console.log("posting item")
        await axios.post(`/api/cart/modify`, {
          orderId,
          productId: LScart[i].id,
          quantity: LScart[i].quantity,
        });
      }
    }
    await postLStoDB()
    localStorage.clear()

    const DBcart = await axios.get(`/api/cart/${orderId}`).then(({data}) => {
      console.log("DATA ANTES DEL FOREACH", data.products)
      data.products.forEach(e => e.quantity = e.order_product.quantity)
      return data.products
    });

    //dejar estos comentarios
    console.log("DBcart:", DBcart)
    console.log("LScart", LScart);

    //unifica los dos carritos por id y suma las cantidades de id repetidos
    let joinedCart = [...DBcart, ...LScart]
    let unifiedCart = Object.values(joinedCart.reduce((a, c) => {
      if (!a[c.id]) a[c.id] = c
      else a[c.id].quantity += c.quantity;
      return a;
    }, {}));
    dispatch(setUnifiedCart(unifiedCart));

  }

  //Si no existe nada en el Local Storage hace el pedido axios con la data del carrito nomas
  else
    axios.get(`/api/cart/${orderId}`).then(({data}) => {
      data.products.forEach(e => e.quantity = e.order_product.quantity)
      dispatch(setCart(data.products));
    });
};


export const modifyLSCart = (product, quantity = 0) => (dispatch) => {
  //traemos el Local Storage Cart
  const LScartJSON = localStorage.getItem("cartProducts");
  let LScart = LScartJSON ? JSON.parse(LScartJSON) : [];

  //Buscamos el producto seleccionado en el array de productos
  const index = LScart.findIndex((e) => e.id === product.id);
  
  //Si esta el producto en el Local Storage, le modifica cantidad
  if (index !== -1) {
    //Si la cantidad quitada resulta en un valor menor a 0 entonces el producto se quita
    if (product.quantity + quantity <= 0) LScart.splice(index, 1);

    //Sino se agrega cantidad
    else LScart[index] = {...product, quantity: LScart[index].quantity + quantity};
  }

  //Sino el producto no existe lo agrega
  else LScart.push({...product, quantity: 1})

  //Finalmente se manda al Local Storage nuevamente
  localStorage.setItem("cartProducts", JSON.stringify(LScart))
  dispatch(setLSCartProduct(LScart))
}

export const modifyCart = (product, quantity = 0) => async (dispatch, getState) => {
  const userId = getState().users.user.id;
  const cart = getState().cart;
  const orderId = getState().orders.order.id

  //res es un order_product {orderId: 2, productId: 1, quantity: 4}
  const res = await axios.post(`/api/cart/modify`, {orderId, productId: product.id, quantity});

  //Si el producto no está en el carrito, se agrega
  const index = cart.findIndex((e) => e.id === product.id);
  if (index === -1) {
    dispatch(setCartProduct(cart.concat([{...product, quantity: res.data.quantity}])), userId)

  //Si el producto está en el carrito...
  } else {
    const cartCopy = [...cart];
    //...y hubo respuesta del server, se modifica la quantity
    if (res.data) cartCopy[index].quantity = res.data.quantity;
    //...y no hubo respuesta del server, significa que se deleteó en la db, entonces se saca el producto del carrito
    else cartCopy.splice(index, 1);
    dispatch(setCartProduct(cartCopy, userId))
  }
};

export const setAddress = (id, address) => (dispatch) => {
  axios
    .put(`/api/orders/update`, {orderId: id, address})
    .then(({data}) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const setAmount = (subtotal, id) => (dispatch) => {
  return axios
    .put(`/api/orders/update`, {orderId: id, subtotal})
    .then(({data}) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const setRecipient = (id, fullName) => (dispatch) => {
  console.log("ENTRANDO A setRecipient CON fullName, ", fullName);
  console.log("ENTRANDO A setRecipient CON orderId, ", id);
  return axios
    .put(`/api/orders/update`, {orderId: id, fullName})
    .then(({data}) => dispatch(setOrder(data)))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};

export const sendEmail = (email, products, order) => (dispatch) => {
  console.log("ENTRANDO A sendEmail CON email, products, order", email, products, order);
  return axios
    .post("/api/send/email", {order: order, products: products, email: email})
    .then(({data}) => console.log(data));
};

export const setStatus = (id, status) => (dispatch) => {
  console.log("ENTRANDO A setStatus CON status ", status);
  console.log("ENTRANDO A setStatus CON orderId ", id);
  return axios
    .put(`/api/orders/update`, {orderId: id, status: status})
    .then(({data}) => console.log("orden actualizada a status COMPLETED", data))
    .then(() => success("Orden actualizada con exito."))
    .catch((err) => console.log(err));
};