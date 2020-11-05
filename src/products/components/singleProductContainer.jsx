import React from "react";
import { connect } from 'react-redux'
import SingleProduct from './singleProduct'
import { getSingleProduct } from '../productsActionCreators'

const mapStateToProps = (state) => ({ singleProduct : state.products.singleProduct })
const mapDispatchToProps = (dispatch) => ({ getSingleProduct : (id) => dispatch(getSingleProduct(id))})

class SingleProductContainer extends React.Component {
  
  componentDidMount(){
    this.props.getSingleProduct(this.props.match.params)
  }

  render() {
    const {singleProduct} = this.props
    return (
      <div>
        <SingleProduct singleProduct={singleProduct}/> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)