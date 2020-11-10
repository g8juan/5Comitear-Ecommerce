import React from "react";
import Login from "./Login";

import { connect } from "react-redux";
import { login, setErrorLogin } from "./usersActionCreators";

function mapStateToProps(state) {
  return {
    error: state.users.error,
    userId: state.users.user.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
    setErrorLogin: (bool) => dispatch(setErrorLogin(bool)),
  };
}

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loader: false
    };
  }

  componentDidUpdate() {
    if (this.props.userId) this.props.history.push("/");
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ loader: true })
    this.props.login(this.state);
  };

  onChangeHandler = (e) => {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  };

  handleClose = () => {
    this.setState({ loader: false })
    this.props.setErrorLogin(false);
  };

  render() {
    return (
      <Login
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        email={this.state.email}
        password={this.state.password}
        error={this.props.error}
        handleClose={this.handleClose}
        loader={this.state.loader}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
