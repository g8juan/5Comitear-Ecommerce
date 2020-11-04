import React from "react";
import { connect } from 'react-redux'
import SingleProduct from './singleProduct'
import { getSingleProduct } from '../productsActionCreators'

const mapStateToProps = (state) => ({ singleProduct : state.products.singleProduct })
const mapDispatchToProps = (dispatch) => ({ getSingleProduct : (id) => dispatch(getSingleProduct(id))})

class SingleProductContainer extends React.Component {
  
  componentDidMount(){
    console.log(this.props.match.params)
    const id = (this.props.match.params)
    this.props.getSingleProduct(id)
  }

  render() {
    console.log(this.props.singleProduct)
    const {singleProduct} = this.props
    return (
      <div>
        SINGLE PRODUCT CONTAINER
        <SingleProduct singleProduct={singleProduct}/> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)