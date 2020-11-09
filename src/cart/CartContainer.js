import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { getCart, modifyCart, setAmount } from "./cartActionCreators";

function mapStateToProps(state) {
  return {
    products: state.cart.products, //Array
    orderId: state.orders.order.id,
    userId: state.users.user.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: (orderId) => dispatch(getCart(orderId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity)),
    setAmount: (subtotal, orderId) => dispatch(setAmount(subtotal, orderId)),
  };
}

class CartContainer extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.orderId);
  }

  increaseQuantity = (product) => this.props.modifyCart(product, 1);
  decreaseQuantity = (product) => this.props.modifyCart(product, -1);

  handleDelete() {
    /*TODO*/
  }

  handleClick = (event) => {
    console.log("ENTRANDO AL HANDLECLICK");
    event.preventDefault();
    const subtotal = event.target.value;
    this.props.setAmount(subtotal, this.props.orderId);
    if (subtotal > 0) this.props.history.push("/cart/checkout");
  };

  render() {
    return (
      <div>
        <Cart
          products={this.props.products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          handleDelete={this.handleDelete}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
