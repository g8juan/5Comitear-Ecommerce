import React from "react";
import { connect } from 'react-redux';
import SingleProduct from './singleProduct';
import { getSingleProduct, deleteSingleProduct } from '../productsActionCreators';

const mapStateToProps = (state) => ({ singleProduct : state.products.singleProduct, userType: state.users.user.userType })
const mapDispatchToProps = (dispatch) => ({ 
  getSingleProduct : (id) => dispatch(getSingleProduct(id)),
  deleteSingleProduct: (singleProduct) => dispatch(deleteSingleProduct(singleProduct))
})

class SingleProductContainer extends React.Component {
  
  componentDidMount(){
    this.props.getSingleProduct(this.props.match.params)
  }

  handleDelete = async (singleProductId) => {
    await this.props.deleteSingleProduct(singleProductId)
    this.props.history.push("/products")
  }

  render() {
    const {singleProduct, userType} = this.props
    return (
      <div>
        <SingleProduct singleProduct={singleProduct} userType={userType} handleDelete={this.handleDelete} /> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)