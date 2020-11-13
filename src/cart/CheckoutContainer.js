import React from "react";
import { connect } from "react-redux";
import { setAddress, setRecipient } from "./cartActionCreators";
import Checkout from "./Checkout";

function mapStateToProps(state) {
  return {
    order: state.orders.order,
    user: state.users.user,
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
      error: false
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
    if (event.target.name === "street and number") this.setState({ street: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { order, setRecipient, setAddress } = this.props;
    const { firstName, lastName, zip, province, city, street } = this.state;
    // eslint-disable-next-line
    if (firstName == '' || lastName == '' || zip == '' || province == '' || city == '' || street == '') {
      this.setState({ error: true })
    } else {
      let fullName = firstName + " " + lastName;
      let fullAddress = street + ". " + city + " (" + zip + ") " + province + ", Argentina.";
      const actualizarData = async () => {
        await setRecipient(order.id, fullName);
        await setAddress(order.id, fullAddress);
      };
      actualizarData();
      this.props.history.push("./checkout/payment");
    }
  };

  render() {
    return (
      <div>
        <Checkout
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
