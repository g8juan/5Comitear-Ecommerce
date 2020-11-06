import axios from "axios";
// import {SET_USERS} from "../redux/constants"

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

const getUsers = (users) => ({
  type: "GET_USERS",
  payload: users,
});

const setOrder = (order) => ({
  type: "SET_ORDER",
  payload: order,
});

export const errorLogin = (error) => ({
  type: "ERROR_LOGIN",
  error,
});

// export const getOrderId = () => (dispatch, getState) => {
//   axios
//     .get(`/api/orders/${getState().users.user.id}`)
//     .then((res) => res.data)
//     .then((order) => dispatch(setOrder(order)))
//     .catch((err) => console.log(err));
// };

export const getOrderId = (id) => (dispatch, getState) => {
  return axios.get(`/api/orders/${id}`)
  .then((res) => res.data)
  .then((order) => dispatch(setOrder(order)))
  .catch((err) => console.log(err));
};

// export function getOrderId() {
//   return async (dispatch, getState) => {
//     try {
//       const res = await axios.get(`/api/orders/${getState().users.user.id}`)
//       dispatch(setOrder(res.data))
//     } catch (err) {console.log(err)}
//   }
// }

export const register = (user) => (dispatch) => {
  axios.post("api/register", user)
    .then((res) => res.data).then((user) => {
      console.log("Registrado usuario", user);
      return newOrder()
      // return axios.post("/api/orders/new", {userId: user.id}).then((order)=>{
      //   dispatch(setOrder(order))
      //   console.log(`Orden generada para usuario ${user.name}`)
      // }).catch((err) => console.log(err));
    });
};

export const newOrder = () => (dispatch, getState) => {
  const user = getState().users.user
  axios.post("/api/orders/new", {userId: user.id}).then((order)=>{
    dispatch(setOrder(order))
    console.log(`Orden generada para usuario ${user.name}`)
}).catch((err) => console.log(err))}

/* export const addCart = (userId, ammount, address) => (dispatch) => {
  axios.post("/api/newCart", { userId, ammount: 0, address });
}; */

export const login = (user) => (dispatch) => {
  axios
    .post("/api/login", user, { withCredentials: true })
    .then((res) => res.data)
    .then((user) => dispatch(setUser(user)))
    .catch((err) => dispatch(errorLogin(true)))
};

export const getUser = () => (dispatch) => {
  axios
    .get("http://localhost:8000/api/users")
    .then((res) => res.data)
    .then((users) => dispatch(getUsers(users)));
};

export const logOut = () => (dispatch) => {
  axios.get("/api/logout").then(() => dispatch(setUser({})));
};

//export const getUserData = ()
//     .post("http://localhost:8000/api/register", user)

// function setUser(usersArr) {
//   return {
//     type: SET_USERS,
//     payload: usersArr //usar "payload" si hay una sola extra key, no hacer esto >>>> return {type:"SET_USERS", users:usersArr}
//   }
// }

// export function getUsers() {
//   return function (dispatch, getState) {
//     axios.get("/api/users").then(res => dispatch(setUser(res.data)))
//       .catch(err => {throw err});
//   }
// }

// //Si no se utiliza para ninguna otra acción el action creator SET_USERS(), se puede hacer todo en una sola funcion (hacer esta refactorización solo al final del e-commerce)
// export function getUsers(usersArr) {
//   return function (dispatch, getState) {
//     axios.get("/api/users").then(res => dispatch({
//       type: SET_USERS,
//       payload: usersArr
//     }))
//       .catch(err => {throw err});
//   }
// }
