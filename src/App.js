import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import axios from 'axios'
import ProductsContainer from './products/components/productsContainer'
import SingleProductContainer from './products/components/singleProductContainer'


class App extends React.Component {

  componentDidMount(){
    axios.get("/api/users").then(users=>console.log(users))
  } 

  render() {
    return (
        <Switch>
          <Route exact path="/products" component={ProductsContainer}/>
          <Route exact path="/products/:id" component={SingleProductContainer}/>
          <Route exact path="/orders"/>
          <Route exact path="users" />
          <Route exact path="/" render={() => (
            <div className="App" >
            <header className="App-header">
              <p> APP / MAIN </p>
            </header>
          </div>
          )} />
        </Switch>
      
    );
  }
}

export default App;