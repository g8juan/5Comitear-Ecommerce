import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ProductsContainer from "./products/components/productsContainer";
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/users").then((users) => console.log(users));
  }

  render() {
    return (
      <div className="App">
        {/*    <header className="App-header">
          <p>APP / MAIN</p>
        </header> */}

        <Switch>
          <Route exact path="/" />
          <Route path="/products" component={ProductsContainer} />
          <Route path="/orders" />
          <Route path="users" />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
