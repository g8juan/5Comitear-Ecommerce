/* import './App.css';
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <p>
          Hola chicos!
        </p>
      </header>
    </div>

  );
}

export default App; */

// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     '& > * + *': {
//       marginTop: theme.spacing(1),
//     },
//   },
// }));

// export default function App() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//     </div>
//   );
// }






import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//import { fetchIsLogged } from "../store/action-creators/users";
import CartContainer from "./cart/CartContainer";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/cart" component={CartContainer} />
          {/* <Route exact path="/order" component={OrderContainer} /> */}
          <Redirect from="/" to="#" />
        </Switch>
      </div>
    );
  }
}

export default connect(null, null)(App);