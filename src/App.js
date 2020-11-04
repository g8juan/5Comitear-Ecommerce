import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarContainer from './navbar/NavigationBarContainer.js'

class App extends React.Component {

  render() {

    return (
      <div className="App" >
         <NavigationBarContainer />
        <header className="App-header">
          <p>
            APP / MAIN
          </p>
        </header>

       
        <Switch>
          <Route path="/products" />
          <Route path="/orders"/>
          <Route path="users" />
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;