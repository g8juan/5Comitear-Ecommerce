import React from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { setAdress } from "./ordersActionCreators";

function mapStateToProps(state, ownProps) {
  return {
    address: state.orders.address,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    setAdress: (address) => dispatch(setAdress(address)),
  };
}

class OrderContainer extends React.Component {
  handleChange = () => {

  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <OrderForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
