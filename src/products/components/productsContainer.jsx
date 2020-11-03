import React from "react";
import { connect } from 'react-redux'
import Products from './products'
// import queryString from 'query-string';
import getMovies from '../productsActionCreators'

const mapStateToProps = (state) => ({ products : state.products })
const mapDispatchToProps = (dispatch) => ({ getMovies : (name) => dispatch(getMovies(name))})

class ProductsContainer extends React.Component {

  /* componentDidMount(){
    const parsed = queryString.parse(location.search)
    console.log(parsed)
    this.props.getMovies({name: parsed.name})
  } */

  render() {
    console.log(this.props.match.params)
    const {products} = this.props
    return (
        <Products products={products}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)