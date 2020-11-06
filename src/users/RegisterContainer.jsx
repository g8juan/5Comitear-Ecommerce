import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import { register } from "./usersActionCreators";
import { newOrder , getCart } from '../cart/cartActionCreators'
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(register(user)),
    newOrder: (userId) => dispatch(newOrder(userId))
  };
};

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      address: "",
      phone: "",
      error: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    if (e.target.value === "") {
      this.setState({ [e.target.id]: true });
    }
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    console.log("HISTORY", this.props.history);
    e.preventDefault();
    if (
      this.state.email === "" ||
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.password === "" ||
      this.state.address === "" ||
      this.state.phone === ""
    ) {
      this.setState({ error: true });
    } else {
      this.props.register({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        address: this.state.address,
        phone: this.state.phone,
        userType: "1",
      });

      this.setState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        address: "",
        phone: "",
      });
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Register
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        address={this.state.address}
        phone={this.state.phone}
        password={this.state.password}
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        error={this.state.error}
      />
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
);
