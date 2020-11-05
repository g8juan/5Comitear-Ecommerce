import React from "react";
import { connect } from 'react-redux'
import Products from './products'
import { getProducts } from '../productsActionCreators'

const mapStateToProps = (state) => ({ products : state.products.products })
const mapDispatchToProps = (dispatch) => ({ getProducts : (n) => dispatch(getProducts(n))})

class ProductsContainer extends React.Component {

  componentDidMount(){ 
    const search = this.props.location.search, query = new URLSearchParams(search)
    if (search) this.props.getProducts(query.get('s')) 
    else this.props.getProducts() 
  }

  componentDidUpdate(previousProps){
    if (previousProps.location.search !== this.props.location.search) {
      const search = this.props.location.search, query = new URLSearchParams(search)
      this.props.getProducts(query.get('s'))
    }
  }

  render() { return <div> <Products products={this.props.products}/> </div> } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
