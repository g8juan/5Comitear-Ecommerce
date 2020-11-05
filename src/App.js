import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ProductsContainer from "./products/components/productsContainer";
import SingleProductContainer from "./products/components/singleProductContainer";
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";
import NavigationBarContainer from "./navbar/NavigationBarContainer.js";
import CartContainer from "./cart/CartContainer";
import OrderContainer from "./orders/OrderContainer";
import PaymentContainer from "./payment/MainScreen";

//import { fetchIsLogged } from "../store/action-creators/users";

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/users").then((users) => console.log(users));
  }

  render() {
    return (
      <div className="App">
        <NavigationBarContainer />
        {/*    <header className="App-header">
          <p>APP / MAIN</p>
        </header> */}

        <Switch>
          <Route path="users" />
          <Route exact path="/" />
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/products/:id" component={SingleProductContainer} />
          <Route path="/orders" component={OrderContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/payment" component={PaymentContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
