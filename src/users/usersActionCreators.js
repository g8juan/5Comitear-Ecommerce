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

export const errorLogin = (error) => ({
  type: "ERROR_LOGIN",
  error,
});

const setOrder = (order) => ({ type: "SET_ORDER", payload: order });

export const getOrderId = (userId) => (dispatch) => {
  axios
    .get(`/api/orders/getClientOrder/2`)
    .then((res) => res.data)
    .then((products) => dispatch(setOrder(products)))
    .catch((err) => console.log(err));
};

export const register = (user) => (dispatch) => {
  axios
    .post("api/register", user)
    .then((res) => res.data)
    .then((user) => {
      console.log("soy user", user);
      return axios.post("/api/orders/newCart", {
        userId: user.id,
        ammount: 0,
        address: user.address,
      });
    });
};

/* export const addCart = (userId, ammount, address) => (dispatch) => {
  axios.post("/api/newCart", { userId, ammount: 0, address });
}; */


export const login = (user) => (dispatch) => {
  axios
    .post("/api/login", user, { withCredentials: true })
    .then((res) => res.data)
    .then((logInfo) => dispatch(setUser(logInfo)))
    .catch((err) => dispatch(errorLogin(true)));
};

export const getUser = () => (dispatch) => {
  axios
    .get("http://localhost:8000/api/users")
    .then((res) => res.data)
    .then((logInfo) => dispatch(setUser(logInfo)))
    .catch((err) => dispatch(errorLogin(true)));
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
