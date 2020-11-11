import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { getCart, modifyCart, setAmount } from "./cartActionCreators";
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
  };
}

class CartContainer extends React.Component {
  componentDidMount() {
    if (this.props.userId) this.props.getCart(this.props.orderId)
    else this.props.getCart()
  }

  componentDidUpdate({ orderId }) {
    if (this.props.orderId !== orderId)
      this.props.getCart(this.props.orderId)
  }

  //TODO:
  //if(this.props.location.state) this.props.getCart(this.props.location.state.orderId)
  //Esta linea iba en los componentDidUpdate y componentDidUpdate para renderizar la vista mis compras. Pasarle la vista de resumen de compra que hicieron Juan y Yenien

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
    console.log(this.props)

    return (
      <div>
        {/* <Steper /> */}
        <Cart
          products={this.props.cart}
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