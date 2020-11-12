import React from "react";
import { connect } from "react-redux";
import AdminUpdateProducts from "../components/AdminUpdateProducts";
import { updateProduct } from '../../products/productsActionCreators';


function mapStateToProps(state) {
    return {
        singleProduct: state.products.singleProduct
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateProduct: (product) => dispatch(updateProduct(product))
    }
}

class AdminUpdateProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.singleProduct, error: false}

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

    
  /* componentDidMount() { 
      const x = {...this.props.singleProduct}
      this.setState({...this.state, x  })
  } */


  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    const { id, name, price, description, thumbnail, image, stock } = this.state
    e.preventDefault();
    if (name === "" || price === "" || description === "" || thumbnail === "" || image === "" || stock === "") {
      this.setState({ error: true });
    } else {
      this.props.updateProduct({id, name, price, description, thumbnail, image, stock})
    }
  }

  render() {
    return <AdminUpdateProducts 
    onChange={this.onChangeHandler}
    onSubmit={this.onSubmitHandler}
    name={this.state.name}
    price={this.state.price}
    description={this.state.description}
    thumbnail={this.state.thumbnail}
    image={this.state.image} 
    stock={this.state.stock}
    error={this.state.error}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUpdateProductsContainer);