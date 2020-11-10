import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {};
}
function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

class OrderContainer extends React.Component {
  handleChange = () => {};

  handleSubmit = () => {};

  render() {
    return <div>Ordenes del Usuario</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
