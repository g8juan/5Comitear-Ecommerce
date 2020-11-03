import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import axios from 'axios'
import ProductsContainer from './products/components/productsContainer'

class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    axios.get("/api/users").then(users=>console.log(users))
  } 

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <p>
            APP / MAIN
          </p>
        </header>

        <Switch>
          <Route path="/products" component={ProductsContainer}/>
          <Route path="/orders"/>
          <Route path="users" />
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;