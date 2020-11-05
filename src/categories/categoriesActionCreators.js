import axios from "axios"

export const actionCategories = (categories) => {
    return { type: 'GET_CATEGORIES', categories: categories }
}

export const actionSelectCategory = (categorySelected) => {
    return { type: 'SELECT_CATEGORY', categorySelected: categorySelected }
}

export const getCategories = () => (dispatch) => {
  axios.get('/api/categories')
    .then(res => res.data)
    .then(categories => dispatch(actionCategories(categories)))
    .catch(err => console.log(err))
}

export const getSingleCategory = (id) => (dispatch) => {
    axios.get('/api/categories/singleCategory', { params: id })
    .then(res => res.data)
    .then(category => dispatch(actionSelectCategory(category)))
    .catch(err => console.log(err))
}