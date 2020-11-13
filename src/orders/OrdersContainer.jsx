import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { getOrdersList, selectSingleOrder } from "./ordersActionCreators";

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders.ordersList,
    singleOrder: state.orders.singleOrder
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getOrdersList: () => dispatch(getOrdersList()),
    selectSingleOrder: (id) => dispatch(selectSingleOrder(id))
  };
}

class OrdersContainer extends React.Component {

  componentDidMount() {
    this.props.getOrdersList();
  }

  handleClick = (event) => {
    this.props.selectSingleOrder(event.target.value)
  }

  render() {
    return (
      <div>
        <Orders ordersList={this.props.orders} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
