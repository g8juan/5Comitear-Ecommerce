const defaultState = {
    products: [],
    singleProduct: {},
}

export default function productsReducer (state = defaultState, action) {
    switch (action.type) {
    case 'GET_PRODUCTS':
      return {...state, products: action.products}
    case 'SELECT_PRODUCT':
      return {...state, singleProduct: action.singleProduct}
    default:
      return state;
    }
  }