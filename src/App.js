import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ProductsContainer from "./products/components/productsContainer";
import SingleProductContainer from "./products/components/singleProductContainer";
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";
import NavigationBarContainer from "./navbar/NavigationBarContainer.js";
import CategoriesContainer from "./categories/components/categoriesContainer";
import CartContainer from "./cart/CartContainer";
import OrderContainer from "./orders/OrderContainer";
import PaymentContainer from "./payment/MainScreen";
import Home from './home/home'
import { setUser } from "./users/usersActionCreators";

function mapStateToProps(state){
  return {
    user: state.users.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
}

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/me", { 
      withCredentials: true, 
      headers: {"Content-Type": "application/json"}
    })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((user) => {
        console.log(`found user ${user.email}`);
        this.props.setUser(user);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavigationBarContainer />
        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/products/search" component={ProductsContainer} />
          <Route exact path="/products/:id" component={SingleProductContainer} />
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/orders" component={OrderContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/payment" component={PaymentContainer} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
