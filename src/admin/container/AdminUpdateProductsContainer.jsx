import React from "react";
import { connect } from "react-redux";
import AdminUpdateProducts from "../components/AdminUpdateProducts";
import {
  getProductCategory,
  updateCategory,
  updateProduct,
} from "../../products/productsActionCreators";
import {getCategories} from '../../categories/categoriesActionCreators'

function mapStateToProps(state) {
  return {
    singleProduct: state.products.singleProduct,
    productCategory: state.products.productCategory,
    categories: state.categories.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
    getCategories: () => dispatch(getCategories()),
    getProductCategory: (productId) => dispatch(getProductCategory(productId)),
    updateCategory: (updatedCategory) =>
      dispatch(updateCategory(updatedCategory)),
  };
}

class AdminUpdateProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.singleProduct,
      error: false,
      categoryId: this.props.productCategory.categoryId,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getProductCategory(this.props.singleProduct.id);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    const {
      id,
      name,
      price,
      description,
      thumbnail,
      image,
      stock,
    } = this.state;
    e.preventDefault();
    if (
      name === "" ||
      price === "" ||
      description === "" ||
      thumbnail === "" ||
      image === "" ||
      stock === ""
    ) {
      this.setState({ error: true });
    } else {
      this.props.updateProduct({
        id,
        name,
        price,
        description,
        thumbnail,
        image,
        stock,
      });
      this.props.updateCategory({
        productId: id,
        categoryId: Number(this.state.categoryId),
      });
      this.props.history.push(`/products/${id}`);
    }
  }

  render() {
    return (
      <AdminUpdateProducts
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        name={this.state.name}
        price={this.state.price}
        description={this.state.description}
        thumbnail={this.state.thumbnail}
        image={this.state.image}
        stock={this.state.stock}
        error={this.state.error}
        categoryId={this.state.categoryId}
        categories={this.props.categories}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUpdateProductsContainer);
