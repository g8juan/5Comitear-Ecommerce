import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { getOrdersList } from "./ordersActionCreators";

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders.ordersList,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getOrdersList: () => dispatch(getOrdersList()),
  };
}

class OrdersContainer extends React.Component {
  componentDidMount() {
    this.props.getOrdersList();
  }

/*   componentDidUpdate({ orderId }) {
    if (this.props.orderId !== orderId) this.props.getOrdersList();
  } */

  render() {
    return (
      <div>
        <Orders ordersList={this.props.orders} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
