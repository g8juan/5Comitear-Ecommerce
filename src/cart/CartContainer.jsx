import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";
import {getCart, modifyCart, setAmount, modifyLSCart} from "./cartActionCreators";
// import Steper from '../utils/steper/steper'

function mapStateToProps(state) {
  return {
    cart: state.cart, //Array
    orderId: state.orders.order.id,
    userId: state.users.user.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: (orderId) => dispatch(getCart(orderId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity)),
    setAmount: (subtotal, orderId) => dispatch(setAmount(subtotal, orderId)),
    modifyLSCart: (product, quantity) => dispatch(modifyLSCart(product, quantity)),
  };
}

class CartContainer extends React.Component {

  componentDidMount() {
    if (this.props.userId) this.props.getCart()
  }

  handleClick = (event) => {
    event.preventDefault();
    const subtotal = event.target.value;
    this.props.setAmount(subtotal, this.props.orderId);
    if (subtotal > 0) this.props.history.push("/cart/checkout");
  };

  increaseQuantity = (product) => {
    if (this.props.userId) this.props.modifyCart(product, 1)
    else this.props.modifyLSCart(product, 1)
  };
  decreaseQuantity = (product) => {
    if (this.props.userId) this.props.modifyCart(product, -1)
    else this.props.modifyLSCart(product, -1)
  };

  render() {
    const cartJSON = localStorage.getItem("cartProducts");
    const LScart = cartJSON ? JSON.parse(cartJSON) : [];

    return (
      <div>
        {/* <Steper /> */}
        <Cart
          products={this.props.userId ? this.props.cart : LScart}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          handleDelete={this.handleDelete}
          handleClick={this.handleClick}
          LSproducts={LScart}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);