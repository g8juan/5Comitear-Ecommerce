import axios from "axios";

export const actionProducts = (products) => {
  return { type: "GET_PRODUCTS", products: products };
};

export const actionSingleProduct = (singleProduct) => {
  return { type: "SELECT_PRODUCT", singleProduct: singleProduct };
};

export const actionDeletedProduct = (deletedProduct) => {
  return { type: "DELETE_PRODUCT", deletedProduct: deletedProduct };
};

const actionProductCategory = (productCategory) => {
  return {
    type: "GET_PRODUCTCATEGORY",
    productCategory,
  };
};

export const getProducts = (searchTerm, categoryId) => (dispatch) => {
  axios
    .get(`/api/products`, { params: { searchTerm, categoryId } })
    .then((res) => res.data)
    .then((products) => dispatch(actionProducts(products)))
    .catch((err) => console.log(err));
};

export const getSingleProduct = (id) => (dispatch) => {
  axios
    .get("/api/products/singleProduct", { params: id })
    .then((res) => res.data)
    .then((product) => dispatch(actionSingleProduct(product)))
    .catch((err) => console.log(err));
};

export const updateProduct = (product) => (dispatch) => {
  axios
    .put("/api/products/singleProduct", product)
    .then((product) => product.data)
    .then((product) => dispatch(actionSingleProduct(product)));
};

export const deleteSingleProduct = (singleProductId) => (dispatch) => {
  axios.post("/api/products/singleProduct", { id: singleProductId })
    .then(res => res.data)
    .then(deletedProduct => dispatch(actionDeletedProduct(deletedProduct)))
}
export const updateCategory = (productAndCategory) => (dispatch) => {
  console.log("soy product and category", productAndCategory);
  axios
    .put("/api/categories/update", productAndCategory)
    .then((product) => dispatch(actionProductCategory(product.data)));
};

export const getProductCategory = (productId) => (dispatch) => {
  return axios
    .get("/api/categories/productCategory", {
      params: { productId: productId },
    })
    .then((res) => res.data)
    .then((productCategory) =>
      dispatch(actionProductCategory(productCategory))
    );
};

// export const getProductsByCategory = (categoryId) => (dispatch) => {
//   axios.get(`/api/products/productsByCategory`, {params: {categoryId}})
//     .then((res) => res.data[0].products)
//     .then((products) => dispatch(actionProducts(products)))
//     .catch((err) => console.log(err));
// };
