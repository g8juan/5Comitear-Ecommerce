import axios from "axios";
import {success} from '../utils/logs'

export const setOrder = (order) => ({
  type: "SET_ORDER",
  payload: order,
});

export const resetOrder = () => ({
  type: "RESET_ORDER"
})

export const getOrder = () => (dispatch, getState) => {
  axios.get(`/api/orders/${getState().users.user.id}`)
    .then((res) => dispatch(setOrder(res.data)))
    .catch((err) => console.log(err))
}

export const postOrder = (id) => (dispatch) => {
  axios.post(`http://localhost:8000/api/orders/new`, {userId: id})
    .then(({data}) => dispatch(setOrder(data))).then(() => success('orden creada con exito.', ""))
    .catch((err) => console.log(err))
}