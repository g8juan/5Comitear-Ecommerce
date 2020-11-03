import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import { register } from "./usersActionCreators";

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
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.register(this.state);
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      address: "",
      phone: "",
    });
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
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      dispatch(register(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
