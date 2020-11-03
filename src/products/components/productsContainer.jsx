import React from "react";
import { connect } from 'react-redux'
import Products from './products'
import { getProducts } from '../productsActionCreators'

const mapStateToProps = (state) => ({ products : state.products })
const mapDispatchToProps = (dispatch) => ({ getProducts : () => dispatch(getProducts())})

class ProductsContainer extends React.Component {
  
  componentDidMount(){
    console.log(this.props)
    return this.props.getProducts()
  }

  render() {
    console.log(this.props.products)
    const {products} = this.props
    return (
        <Products products={products}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)