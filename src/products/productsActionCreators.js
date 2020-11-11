import axios from "axios";

export const actionProducts = (products) => {
  return { type: "GET_PRODUCTS", products: products };
};

export const actionSingleProduct = (singleProduct) => {
  return { type: "SELECT_PRODUCT", singleProduct: singleProduct };
};

export const actionDeletedProduct = (deletedProduct) => {
  return { type: "DELETE_PRODUCT", deletedProduct: deletedProduct }
}

export const getProducts = (productName) => (dispatch) => {
  axios.get(`/api/products`, { params: { name: productName } })
    .then((res) => res.data)
    .then((products) => dispatch(actionProducts(products)))
    .catch((err) => console.log(err));
};

export const getSingleProduct = (id) => (dispatch) => {
  axios.get("/api/products/singleProduct", { params: id })
    .then((res) => res.data)
    .then((product) => dispatch(actionSingleProduct(product)))
    .catch((err) => console.log(err));
};

export const updateProduct = (product) => (dispatch) => {
  axios.put("/api/products/singleProduct", product)
    .then(res => res.data)
    .then((product) => dispatch(actionSingleProduct(product)))
};

export const deleteSingleProduct = (singleProduct) => (dispatch) => {
  console.log("product en el AXIOS", singleProduct)
  axios.delete("/api/products/singleProduct", { params: { id: singleProduct.id } })
    .then(res => res.data)
    .then(deletedProduct => dispatch(actionDeletedProduct(deletedProduct)))
}


