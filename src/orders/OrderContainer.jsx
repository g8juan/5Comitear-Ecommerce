import React from "react";
import {connect} from "react-redux";
import OrderForm from "./OrderForm"

function mapStateToProps (state, ownProps) {
  return {};
};
function mapDispatchToProps (dispatch, ownProps) {
  return {};
};

class OrderContainer extends React.Component {
  
  render(){
    return (
      <div>
        <OrderForm />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);