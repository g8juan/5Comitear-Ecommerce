import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";
import {getCart, modifyCart} from "./cartActionCreators";

function mapStateToProps (state) {
  return {
    products: state.cart.products, //Array
    orderId: state.orders.order.id,
    userId: state.users.user.id,
  };
};

function mapDispatchToProps (dispatch) {
  return {
    getCart: (orderId) => dispatch(getCart(orderId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity))
  };
};

class CartContainer extends React.Component {

  componentDidMount() {
    if(this.props.location.state)this.props.getCart(this.props.location.state.orderId)
    else this.props.getCart(this.props.orderId)
  }

  componentDidUpdate({orderId}) {
    if(this.props.orderId !== orderId)
    this.props.getCart(this.props.orderId)
  }

  increaseQuantity = (product) => this.props.modifyCart(product, 1)
  decreaseQuantity = (product) => this.props.modifyCart(product, -1)

  handleDelete(){/*TODO*/}

  render() {
    console.log(this.props)
    return (
      <div>
        <Cart
          products={this.props.products}
          ammount={this.props.ammount}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);