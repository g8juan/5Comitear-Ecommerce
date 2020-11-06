import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { login, errorLogin, getOrderId } from "./usersActionCreators";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidUpdate() {
    if (this.props.userId) this.props.history.push("/");
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.props.getOrderId(this.props.userId);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  }

  handleClose() {
    this.props.errorLogin(false);
  }

  render() {
    return (
      <Login
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        email={this.state.email}
        password={this.state.password}
        error={this.props.error}
        handleClose={this.handleClose}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.users.error,
    userId: state.users.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
    errorLogin: (bool) => {
      dispatch(errorLogin(bool));
    },
    getOrderId: (id) => dispatch(getOrderId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
