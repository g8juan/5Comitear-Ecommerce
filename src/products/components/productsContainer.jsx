import React from "react";
import {connect} from 'react-redux'
import Products from './products'
import {getProducts} from '../productsActionCreators'
import {modifyCart} from '../../cart/cartActionCreators'

function mapStateToProps(state) {
  return {
    products: state.products.products,
    userId: state.users.user.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: (searchTerm, categoryId) => dispatch(getProducts(searchTerm, categoryId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity)),
  }
}

class ProductsContainer extends React.Component {

  search(categoryId) {
    console.log("CATEGORY ID EN SEARCH", categoryId)
    const query = new URLSearchParams(this.props.location.search);
    this.props.getProducts(query.get('s'), categoryId)
  }

  componentDidMount() {

    const productsJSON = localStorage.getItem("cartProducts")
    const localStorageProducts = productsJSON ? JSON.parse(productsJSON) : []
    console.log("LOCAL STORAGE CART PRODUCTS EN PRODUCTS:41", localStorageProducts)

    if (this.props.match.params.id) {
      this.search(parseInt(this.props.match.params.id))
    } else {
      this.search()
    }
  }

  componentDidUpdate(prevProps) {
    const productsJSON = localStorage.getItem("cartProducts")
    const localStorageProducts = productsJSON ? JSON.parse(productsJSON) : []
    console.log("LOCAL STORAGE CART PRODUCTS EN PRODUCTS:41", localStorageProducts)


    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.match.params.id) {
        this.search(parseInt(this.props.match.params.id))
      } else {
        this.search()
      }
    }
  }

  handleClick = (product) => {
    console.log("HANDLECLICK PRODUCT", product)
    this.props.modifyCart(product, 1)
  }

  render() {
    console.log(this.props)
    return (<Products addToCart={this.handleClick} products={this.props.products} userId={this.props.userId} />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)