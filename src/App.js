import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import axios from 'axios'

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
          <Route path="/products"/>
          <Route path="/orders"/>
          <Route path="users" />
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;