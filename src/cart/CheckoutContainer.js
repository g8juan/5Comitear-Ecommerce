import React from "react";
import { connect } from "react-redux";
import { setAddress, setRecipient } from "./cartActionCreators";
import Checkout from "./Checkout";

function mapStateToProps(state, ownProps) {
  return {
    order: state.orders.order,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    setAddress: (id, address) => dispatch(setAddress(id, address)),
    setRecipient: (fullname) => dispatch(setRecipient(fullname)),
  };
}

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      zip: "",
      province: "",
      city: "",
      street: "",
      floor: "",
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.name === "lastName") this.setState({ lastName: event.target.value });
    if (event.target.name === "zip") this.setState({ zip: event.target.value });
    if (event.target.name === "province") this.setState({ province: event.target.value });
    if (event.target.name === "city") this.setState({ city: event.target.value });
    if (event.target.name === "street and number")
      this.setState({ street: event.target.value });
    if (event.target.name === "floor and apartment")
      this.setState({ floor: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("ENTRANDO AL HANDLESUBMIT");
    event.preventDefault();
    const { firstName, lastName, zip, province, city, street, floor } = this.state;

    const fullName = firstName + " " + lastName;
    const fullAddress =
      street + ", " + floor + ". " + city + " (" + zip + ") " + province + ", Argentina.";
    console.log("fullName", fullName);
    console.log("fullAddress", fullAddress);
    console.log(this.props);
    this.props.setAddress(this.props.order.id, fullAddress);
    if (this.props.order.address) this.props.history.push('./checkout/payment')
  };

  render() {
    return (
      <div>
        <Checkout handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
