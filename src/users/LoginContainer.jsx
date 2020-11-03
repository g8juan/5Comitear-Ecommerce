import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { login } from "./usersActionCreators";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  }

  render() {
    return (
      <Login
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
