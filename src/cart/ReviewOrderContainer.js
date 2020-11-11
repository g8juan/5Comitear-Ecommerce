import React from "react";
import { connect } from "react-redux";
import ReviewOrder from "./ReviewOrder";
import { sendEmail } from './cartActionCreators'


function mapStateToProps(state, ownProps) {
  return {
    order: state.orders.order,
    products: state.cart.products,
    email: state.users.user.email,
    cardNumber: state.orders.orderCardNumber
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sendEmail: (email, products, order) => { dispatch(sendEmail(email, products, order)) }
  };
}

class ReviewOrderContainer extends React.Component {
  handleClick = (event) => {
    const { order, products, email, sendEmail } = this.props
    event.preventDefault()
    const enviaEmail = async () => {
      await sendEmail(email, products, order)
    }
    enviaEmail()
    this.props.history.push('/home')
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
