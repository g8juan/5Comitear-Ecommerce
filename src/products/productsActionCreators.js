import axios from "axios"

export const actionProducts = (products) => {
    return { type: 'GET_PRODUCTS', products: products }
}

export const actionSingleProduct = (singleProduct) => {
    return { type: 'SELECT_PRODUCT', singleProduct: singleProduct }
}

export const getProducts = (productName) => (dispatch) => {
  axios.get(`/api/products`, { params: { name: productName } })
    .then(res => res.data)
    .then(products => dispatch(actionProducts(products)))
    .catch(err => console.log(err))
}