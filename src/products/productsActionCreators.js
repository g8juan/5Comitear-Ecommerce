import axios from "axios"

export const actionProducts = (products) => {
    return { type: 'GET_PRODUCTS', products: products }
}

export const actionSingleProduct = (singleProduct) => {
    return { type: 'SELECT_PRODUCT', singleProduct: singleProduct }
}

export const getProducts = () => (dispatch) => {
    axios.get('/api/products')
    .then(res => res.data)
    .then(products => {
        return dispatch(actionProducts(products))
    })
    .catch(err => console.log(err))
}

export const getSingleProduct = (id) => (dispatch) => {
    axios.get('/api/products/singleProduct', { params: id })
    .then(res => res.data)
    .then(product => {
        return dispatch(actionSingleProduct(product))
    })
    .catch(err => console.log(err))
}