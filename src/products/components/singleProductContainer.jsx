import React from "react";
import { connect } from "react-redux";
import SingleProduct from "./singleProduct";
import { getSingleProduct, deleteSingleProduct } from "../productsActionCreators";
import { modifyCart, modifyLSCart } from '../../cart/cartActionCreators'

const mapStateToProps = (state) => ({
  singleProduct: state.products.singleProduct,
  userType: state.users.user.userType,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(getSingleProduct(id)),
  deleteSingleProduct: (singleProduct) => dispatch(deleteSingleProduct(singleProduct)),
  modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity)),
  modifyLSCart: (product, quantity) => dispatch(modifyLSCart(product, quantity))
});

class SingleProductContainer extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params);
  }

  handleDelete = async (singleProductId) => {
    await this.props.deleteSingleProduct(singleProductId);
    this.props.history.push("/products");
  };

  handleClick = (product) => {
    if (this.props.user.id) this.props.modifyCart(product, 1)
    else this.props.modifyLSCart(product, 1)
  }

  render() {
    const { singleProduct, userType } = this.props;
    return (
      <div>
        <SingleProduct
          singleProduct={singleProduct}
          userType={userType}
          handleDelete={this.handleDelete}
          addToCart={this.handleClick}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer);
