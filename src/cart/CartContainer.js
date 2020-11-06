import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
//import { getFavorites, deleteFavorites } from "../store/action-creators/users";
import { increaseProductQuantity, decreaseProductQuantity, getProductsInCart } from "./cartActionCreators";

const mapStateToProps = (state) => {
  return {
    products: state.cart.productsInCart,
    userId: state.users.user.id,
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    oneMore: (productId) => dispatch(increaseProductQuantity(productId)),
    oneLess: (productId) => dispatch(decreaseProductQuantity(productId)),
    productsInCart: (userId) => dispatch(getProductsInCart(userId))
  };
};

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        subTotal: 4300
      },
      items: [
        {
          id: 1,
          name: "zapatillas",
          quantity: 1,
          price: 2500,
          thumbnail: "https:/foto.jpg",
          stock: 120
        },
        {
          id: 2,
          name: "remera",
          quantity: 1,
          price: 1800,
          thumbnail: "https:/foto2.jpg",
          stock: 170
        } 
      ]
    }
    // this.handleDelete = this.handleDelete.bind(this);  // borrar productos del carrito
  }
  componentDidMount() {
    console.log(this.props)
    if(this.props.userId) this.props.getProductsInCart(this.props.userId)
  }

  componentWillUnmount() {

  }


 /*  increaseQty = (event) => {
    console.log(event.target)
    const name = event.target.name;
    const selectedItem = this.state.items.filter((elem) => elem.name === name);
    const notSelectedItems = this.state.items.filter((elem) => elem.name !== name);
    selectedItem[0].quantity = selectedItem[0].quantity + 1;
      this.setState((prevState) => ({ ...prevState, items: [...notSelectedItems, selectedItem] }
      , console.log(this.state)
    ))
  } */

  /* increaseQty = (event) => {
    console.log(event.target)
    const name = event.target.name;
    const selectedItem = this.state.items.filter((elem) => elem.name === name);
    const notSelectedItems = this.state.items.filter((elem) => elem.name !== name);
    selectedItem[0].quantity = selectedItem[0].quantity + 1;
    //this.props.setProductQuantity('+', selectedItem.name)
      this.setState((prevState) => ({ ...prevState, items: [...notSelectedItems, selectedItem] }
      , console.log(this.state)
    ))
  } */

  decreaseQty = (event) => {
    console.log(event.target)
    const name = event.target.name;
    const selectedItem = this.state.items.filter((elem) => elem.name === name);
    const notSelectedItems = this.state.items.filter((elem) => elem.name !== name);
    selectedItem[0].quantity = selectedItem[0].quantity - 1;
    //this.props.setProductQuantity('+', selectedItem.name)
      this.setState((prevState) => ({ ...prevState, items: [...notSelectedItems, selectedItem] }
      , console.log(this.state)
    ))
  } 


  increaseQty = (item) => {
    //const item = event.target.selectedItem;
    //console.log("event", event.target)
    console.log("item", item)
    //this.props.oneMore(id)
  }

  handleDelete(item) {
    console.log(item)
    /* this.props
      .deleteFavorites(id)
      .then(() => this.props.getFavorites(this.props.userId));
    this.props.history.push("/"); */
  }

  render() {
    return (
      <div>
        <Cart 
          cart = {this.props.cart}
          increaseQty ={this.increaseQty} 
          decreaseQty={this.decreaseQty} 
          // products={this.props.products}  cuando podamos traer la data que Juan envia al back
          products={this.state.items}
          payload={this.state.payload} 
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
