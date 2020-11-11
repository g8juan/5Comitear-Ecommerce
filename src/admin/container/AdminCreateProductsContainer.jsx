import React from "react";
import AdminProducts from "../components/AdminProducts";
import axios from 'axios';

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
      error: false
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    /* if (e.target.value === "") {
      this.setState({ [e.target.id]: true });
    } */
    this.setState({ [e.target.id]: value });
  }

  onSubmitHandler(e) {
    const { name, price, description, thumbnail, image, stock } = this.state
    e.preventDefault();
    if (name === "" || price === "" || description === "" || thumbnail === "" || image === "" || stock === "") {
      this.setState({ error: true });
    } else {
      return axios.post("http://localhost:8000/api/products", { name, price, description, thumbnail, image, stock })
        .then(product => {
          //console.log(product.data.id)
          this.props.history.push(`/products/${product.data.id}`)
        })
        .then(() => this.setState({ name: "", price: "", description: "", thumbnail: "", image: "", stock: "" }))
    }
  }

  render() {
    return <AdminProducts 
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

export default AdminCreateProductsContainer;
