const defaultState = {
    categories: [],
    categorySelected: {}
}

function categoriesReducer (state = defaultState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, categories: action.categories}
    case 'SELECT_CATEGORY':
      return {...state, categorySelected: action.categorySelected}
    default:
      return state;
  }
}
export default categoriesReducer