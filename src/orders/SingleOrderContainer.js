import React from "react";
import axios from "axios";
import SingleOrder from "./SingleOrder";

//  VAMOS A PASAR ESTO A REDUX
//  VAMOS A PASAR ESTO A REDUX
//  VAMOS A PASAR ESTO A REDUX

class SingleOrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleOrder: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    return axios
      .get(`/api/cart/${id}`)
      .then((res) => this.setState({ singleOrder: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(
      this.state.singleOrder,
      "this.state.singleOrder a pasarle a SINGLE ORDER"
    );
    return (
      <div>
        {this.state.singleOrder.length > 1 ? (
          <SingleOrder singleOrder={this.state.singleOrder} />
        ) : (
          <div> NO TENES ORDENES COMPLETAS </div>
        )}
      </div>
    );
  }
}

export default SingleOrderContainer;
