import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContainer from './products/components/productsContainer'
import SingleProductContainer from './products/components/singleProductContainer'
import RegisterContainer from "./users/RegisterContainer";
import LoginContainer from "./users/LoginContainer";
import NavigationBarContainer from './navbar/NavigationBarContainer.js'
import CategoriesContainer from './categories/components/categoriesContainer'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavigationBarContainer />
        {/*    <header className="App-header">
          <p>APP / MAIN</p>
        </header> */}

        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/products/:id" component={SingleProductContainer} />
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/orders" />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/users" />
        </Switch>
      </div>

    );
  }
}

export default App;
