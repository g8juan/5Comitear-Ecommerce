import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import { postOrder } from "../orders/ordersActionCreators";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { success } from "../utils/logs";

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postOrder: (userId) => dispatch(postOrder(userId)),
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
      loader: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    /*    if (e.target.value === "") {
      this.setState({ [e.target.id]: true });
    } */
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    const { email, firstName, lastName, password, address, phone } = this.state;
    e.preventDefault();
    this.setState({ loader: true });
    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      address === "" ||
      phone === ""
    ) {
      this.setState({ error: true });
      this.setState({ loader: false });
    } else {
      return axios
        .post("api/users/register", {
          email,
          firstName,
          lastName,
          password,
          address,
          phone,
          userType: "1",
        })
        .then(({ data }) => {
          success("USUARIO REGISTRADO CON EXITO. ID:", data.id);
          this.props.postOrder(data.id);
          this.props.history.push("/login");
        })
        .then(() => {
          
          this.setState({ email: "", firstName: "", lastName: "", password: "", address: "", phone: "" })})
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
        loader={this.state.loader}
      />
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
);
