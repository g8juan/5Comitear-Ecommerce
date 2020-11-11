import React from "react";
import AdminProducts from "../components/AdminProducts";
import axios from "axios";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
  };
}

class AdminCreateProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      description: "",
      thumbnail: "",
      image: "",
      stock: 0,
      error: false,
      categoryId: 0,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    let value = event.target.value;
    this.setState({ [event.target.id]: value }, () =>
      console.log("category", this.state.categoryId)
    );
  }

  onSubmitHandler(event) {
    const {
      name,
      price,
      description,
      thumbnail,
      image,
      stock,
      categoryId,
    } = this.state;
    event.preventDefault();
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
      return axios
        .post("http://localhost:8000/api/products", {
          name,
          price,
          description,
          thumbnail,
          image,
          stock,
        })
        .then((product) => {
          axios.post("http://localhost:8000/api/categories/add", {
            productId: product.data.id,
            categoryId,
          });
        })
        .then(() => {
          this.setState({
            name: "",
            price: "",
            description: "",
            thumbnail: "",
            image: "",
            stock: "",
          });
          //this.props.history.push("/products");
        });
    }
  }

  render() {
    return (
      <AdminProducts
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        name={this.state.name}
        price={this.state.price}
        description={this.state.description}
        thumbnail={this.state.thumbnail}
        image={this.state.image}
        stock={this.state.stock}
        error={this.state.error}
        categories={this.props.categories}
      />
    );
  }
}

export default connect(mapStateToProps, null)(AdminCreateProductsContainer);
