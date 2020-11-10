import React from "react";
import AdminProducts from "../components/AdminProducts";

class AdminProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount;

  render() {
    return <AdminProducts products={this.state.products} />;
  }
}

export default AdminProductsContainer;
