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

export const getProducts = (searchTerm, categoryId) => (dispatch) => {
  axios.get(`/api/products`, { params: { searchTerm, categoryId } })
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


// export const getProductsByCategory = (categoryId) => (dispatch) => {
//   axios.get(`/api/products/productsByCategory`, {params: {categoryId}})
//     .then((res) => res.data[0].products)
//     .then((products) => dispatch(actionProducts(products)))
//     .catch((err) => console.log(err));
// };
