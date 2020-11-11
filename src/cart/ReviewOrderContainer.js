import React from "react";
import { connect } from "react-redux";
import ReviewOrder from "./ReviewOrder";
import { sendEmail, setStatus } from "./cartActionCreators";
import { postOrder } from "../orders/ordersActionCreators";

function mapStateToProps(state, ownProps) {
  return {
    order: state.orders.order,
    products: state.cart,
    email: state.users.user.email,
    cardNumber: state.orders.orderCardNumber,
    user: state.users.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sendEmail: (email, products, order) => {
      dispatch(sendEmail(email, products, order));
    },
    setStatus: (id, status) => dispatch(setStatus(id, status)),
    postOrder: (userId) => dispatch(postOrder(userId)),
  };
}

class ReviewOrderContainer extends React.Component {
  handleClick = (event) => {
    const { order, products, email, user, sendEmail, setStatus, postOrder } = this.props;
    event.preventDefault();
    const enviaEmailyCambiaOrden = async () => {
      await sendEmail(email, products, order);
      await setStatus(order.id, "completed");
      await postOrder(user.id);
    };
    enviaEmailyCambiaOrden();
    this.props.history.push("/home");
  };

  render() {
    const { order, products, email, cardNumber } = this.props;
    return (
      <div>
        <ReviewOrder
          handleClick={this.handleClick}
          order={order}
          products={products}
          email={email}
          cardNumber={cardNumber}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrderContainer);
