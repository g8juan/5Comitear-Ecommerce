import React from "react";
import { connect } from "react-redux";
import Order from "./Order";

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        subTotal: 4300,
      },
      items: [
        {
          id: 1,
          name: "zapatillas",
          quantity: 1,
          price: 2500,
          thumbnail: "https:/foto.jpg",
          stock: 120,
        },
        {
          id: 2,
          name: "remera",
          quantity: 1,
          price: 1800,
          thumbnail: "https:/foto2.jpg",
          stock: 170,
        },
      ],
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Order />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);