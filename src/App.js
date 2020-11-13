import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setLogin } from "./users/usersActionCreators";
import { getOrder } from "./orders/ordersActionCreators";
import { getCart } from "./cart/cartActionCreators";
import axios from "axios";

import Home from "./home/home";
import ProductsContainer from "./products/components/productsContainer";
import SingleProductContainer from "./products/components/singleProductContainer";
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";
import NavigationBarContainer from "./navbar/NavigationBarContainer.js";
import CategoriesContainer from "./categories/CategoriesContainer";
import CartContainer from "./cart/CartContainer";
import OrdersContainer from "./orders/OrdersContainer";
import PaymentContainer from "./payment/MainScreen";
import CheckoutContainer from "./cart/CheckoutContainer";

import ReviewOrderContainer from "./cart/ReviewOrderContainer";
import AdminUsersContainer from "./admin/container/AdminUsersContainer";
import SingleOrderContainer from "./orders/SingleOrderContainer";
import AdminCreateProductsContainer from "./admin/container/AdminCreateProductsContainer";
import AdminUpdateProductsContainer from "./admin/container/AdminUpdateProductsContainer";
import AdminOrdersContainer from "./admin/container/AdminOrdersContainer";
import AdminCreateCategoryContainer from "./admin/container/AdminCreateCategoryContainer";
import AdminUpdateCategoryContainer from "./admin/container/AdminUpdateCategoryContainer";

function mapStateToProps(state) {
  return {
    user: state.users.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: (user) => dispatch(setLogin(user)),
    getCart: () => dispatch(getCart()),
    getOrder: () => dispatch(getOrder()),
  };
}

class App extends React.Component {
  componentDidMount() {
    return axios
      .get("/api/users/me", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        this.props.setLogin(res.data);
        this.props.getOrder();
      });
  }

  render() {
    return (
      <div className="App">
        <NavigationBarContainer />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/categories/:id" component={ProductsContainer} />
          <Route exact path="/products/" component={ProductsContainer} />
          <Route
            exact
            path="/products/:id"
            component={SingleProductContainer}
          />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/orders" component={OrdersContainer} />
          <Route exact path="/orders/:id" component={SingleOrderContainer} />
          <Route exact path="/cart" component={CartContainer} /> {/*revisar*/}
          <Route exact path="/cart/checkout" component={CheckoutContainer} />
          <Route
            exact
            path="/cart/checkout/review"
            component={ReviewOrderContainer}
          />
          <Route
            exact
            path="/cart/checkout/payment"
            component={PaymentContainer}
          />
          <Route exact path="/admin/users" component={AdminUsersContainer} />
          <Route
            exact
            path="/admin/products/create"
            component={AdminCreateProductsContainer}
          />
          <Route
            exact
            path="/admin/products/update"
            component={AdminUpdateProductsContainer}
          />
          <Route exact path="/admin/orders" component={AdminOrdersContainer} />
          <Route
            path="/admin/category/create"
            component={AdminCreateCategoryContainer}
          />
          <Route
            path="/admin/category/update"
            component={AdminUpdateCategoryContainer}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
