import React from "react";
import { connect } from "react-redux";
import { getAllOrders } from "../../orders/ordersActionCreators";
import AdminOrders from "../components/AdminOrders";
import axios from "axios";

function mapStateToProps(state) {
  return {
    orders: state.orders.ordersList,
    userType: state.users.user.userType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllOrders: () => dispatch(getAllOrders()),
  };
}

class AdminUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      users: [],
    };
  }

  componentDidMount() {
    if (this.props.userType === "3" || this.props.userType === "2") {
      this.props.getAllOrders();
      this.getUserArr();
    } else if (this.props.userType === "1" || !this.props.userType) {
      this.props.history.push("/");
    }
  }

  getUserArr = () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => res.data)
      .then((users) => this.setState({ users: users }));
  };

  /* setUserIdToEmail = () => {
    this.state.
} */

  render() {
    return <AdminOrders orders={this.props.orders} users={this.state.users} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUsersContainer);
