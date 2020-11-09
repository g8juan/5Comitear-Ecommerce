import React from "react";
import { connect } from "react-redux";
import ReviewOrder from "./ReviewOrder";

function mapStateToProps(state, ownProps) {
  return {
    order: state.orders.order,
    products: state.cart.products,
    email: state.users.user.email,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    //aca vamos a seter el status a completed y generar una nueva orden
  };
}

class ReviewOrderContainer extends React.Component {
  handleSubmit = (event) => {
    // aca vamos a recibir el evento que dispatchea el mail y actualiza el status
  };

  render() {
    const { order, products, email } = this.props;
    return (
      <div>
        <ReviewOrder
          handleSubmit={this.handleSubmit}
          order={order}
          products={products}
          email={email}
        />
        ;
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrderContainer);
