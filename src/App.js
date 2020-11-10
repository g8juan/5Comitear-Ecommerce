import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ProductsContainer from "./products/components/productsContainer";
import SingleProductContainer from "./products/components/singleProductContainer";
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";
import NavigationBarContainer from "./navbar/NavigationBarContainer.js";
import CategoriesContainer from "./categories/CategoriesContainer";
import CartContainer from "./cart/CartContainer";
import OrdersContainer from "./orders/OrdersContainer";
import PaymentContainer from "./payment/MainScreen";
import Home from './home/home'
import {setLogin} from "./users/usersActionCreators";
import {getOrder} from "./orders/ordersActionCreators"


function mapStateToProps(state) {
  return {
    user: state.users.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: (user) => dispatch(setLogin(user)),
    getOrder: () => dispatch(getOrder())
  };
}

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/users/me", {withCredentials: true, headers: {"Content-Type": "application/json"}})
      .then((res) => {
        this.props.setLogin(res.data)
        this.props.getOrder()
      })
  }



  render() {
    return (
      <div className="App">
        <NavigationBarContainer />
        <Switch>
          <Route exact path="/products/:id" component={SingleProductContainer} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/orders" component={OrdersContainer} /> {/*Este va a ser para mostrar todas las órdenes del usuario*/}
          <Route exact path="/cart/checkout" component={CartContainer} /> {/*Esta va a ser la vista para el formulario de checkout de compra + tarjeta de credito*/}
          <Route exact path="/cart" component={CartContainer} /> {/*revisar*/}
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/payment" component={PaymentContainer} />
          <Route exact path="/users" />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
