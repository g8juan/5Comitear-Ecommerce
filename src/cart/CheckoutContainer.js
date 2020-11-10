import React from "react";
import { connect } from "react-redux";
import { setAddress, setRecipient } from "./cartActionCreators";
import Checkout from "./Checkout";

function mapStateToProps(state) {
  return {
    order: state.orders.order,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setAddress: (id, address) => dispatch(setAddress(id, address)),
    setRecipient: (id, fullname) => dispatch(setRecipient(id, fullname)),
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
    event.preventDefault();
    const { firstName, lastName, zip, province, city, street, floor } = this.state;
    let fullName = firstName + " " + lastName;
    let fullAddress = street + ", " + floor + ". " + city + " (" + zip + ") " + province + ", Argentina.";
    this.props.setRecipient(this.props.order.id, fullName)
    this.props.setAddress(this.props.order.id, fullAddress);
    if (this.props.order.address && this.props.order.recipient) this.props.history.push('./checkout/payment')
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
