import axios from "axios"

export const actionProducts = (products) => {
    return { type: 'GET_PRODUCTS', products: products }
}

export const actionSingleProduct = (singleProduct) => {
    return { type: 'SELECT_PRODUCT', singleProduct: singleProduct }
}

export const getProducts = () => (dispatch) => {
    console.log('AXIOS')
    axios.get('/api/products')
    .then(res => res.data)
    .then(products => {
        console.log(products)
        return dispatch(actionProducts(products))
    })
    .catch(err => console.log(err))
}