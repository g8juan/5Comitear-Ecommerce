const defaultState = {
  products: [],
  singleProduct: {},
  deletedProduct: {}
}

function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.products }
    case 'SELECT_PRODUCT':
      return { ...state, singleProduct: action.singleProduct }
    case 'DELETE_PRODUCT':
      return { ...state, deletedProduct: action.deletedProduct }
    default:
      return state;
  }
}
export default productsReducer