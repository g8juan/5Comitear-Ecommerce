import React from "react";
import {connect} from 'react-redux'
import Products from './products'
import {getProducts} from '../productsActionCreators'
import {modifyCart, modifyLSCart} from '../../cart/cartActionCreators'

function mapStateToProps(state) {
  return {
    products: state.products.products,
    userType: state.users.user.userType,
    user: state.users.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: (searchTerm, categoryId) => dispatch(getProducts(searchTerm, categoryId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity)),
    modifyLSCart: (product, quantity) => dispatch(modifyLSCart(product, quantity))
  }
}

class ProductsContainer extends React.Component {

  search(categoryId) {
    console.log("CATEGORY ID EN SEARCH", categoryId)
    const query = new URLSearchParams(this.props.location.search);
    this.props.getProducts(query.get('s'), categoryId)
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.search(parseInt(this.props.match.params.id))
    } else {
      this.search()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.match.params.id) {
        this.search(parseInt(this.props.match.params.id))
      } else {
        this.search()
      }
    }
  }

  handleClick = (product) => {
    if (this.props.user.id) this.props.modifyCart(product, 1)
    else this.props.modifyLSCart(product, 1)
  }

  render() {
    return (<Products addToCart={this.handleClick} products={this.props.products} userType={this.props.userType} />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)