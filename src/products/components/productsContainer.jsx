import React from "react";
import { connect } from 'react-redux'
import Products from './products'
import { getProducts } from '../productsActionCreators'

const mapStateToProps = (state) => ({ products : state.products.products })
const mapDispatchToProps = (dispatch) => ({ getProducts : () => dispatch(getProducts())})

class ProductsContainer extends React.Component {

  componentDidMount(){ this.props.getProducts() }

  render() { return <div> <Products products={this.props.products}/> </div> } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
