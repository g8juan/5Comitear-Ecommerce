import React from "react";
import { connect } from 'react-redux'
import Products from './products'

const mapStateToProps = (state) => ({ products : state.products })
/* const mapDispatchToProps = (dispatch) => ({ searchMovies : (title) => dispatch(searchMovies(title))}) */

class CategoriesContainer extends React.Component {

  render() {
    const {products} = this.props
    return (
        <Products movies={products}/>
    );
  }
}

export default connect(mapStateToProps, null)(CategoriesContainer)