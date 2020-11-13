const defaultState = {
  products: [],
  singleProduct: {},
  deletedProduct: {},
  productCategory: {},
};

function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.products };
    case "SELECT_PRODUCT":
      return { ...state, singleProduct: action.singleProduct };
    case "DELETE_PRODUCT":
      return { ...state, deletedProduct: action.deletedProduct };
    case "GET_PRODUCTCATEGORY":
      return { ...state, productCategory: action.productCategory };
    default:
      return state;
  }
}
export default productsReducer;
