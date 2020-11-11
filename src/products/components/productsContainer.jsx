import React from "react";
import {connect} from 'react-redux'
import Products from './products'
import {getProducts} from '../productsActionCreators'
import {modifyCart} from '../../cart/cartActionCreators'

function mapStateToProps(state) {
  return {
    products: state.products.products,
    userId: state.users.user.id,
    userType: state.users.user.userType,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: (n) => dispatch(getProducts(n)),
    modifyCart: (product) => dispatch(modifyCart(product))
  }
}

class ProductsContainer extends React.Component {
  
  search() {
    const query = new URLSearchParams(this.props.location.search);
    this.props.getProducts(query.get('s'))
  }

  componentDidMount() {
    this.search()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.search()
    }
  }

  handleClick = (product) => {
    this.props.modifyCart(product)
  }

  render() {
    return (<Products addToCart={this.handleClick} products={this.props.products} userType={this.props.userType} />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)

