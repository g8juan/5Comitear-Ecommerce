import React from "react";
import SingleOrder from "./SingleOrder";
import { connect } from "react-redux";
import { selectSingleOrder } from "./ordersActionCreators";


function mapStateToProps(state) {
  return {
    singleOrder: state.orders.singleOrder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectSingleOrder: (id) => dispatch(selectSingleOrder(id))
  };
}


class SingleOrderContainer extends React.Component {

  componentDidMount() {
    this.props.selectSingleOrder(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <SingleOrder singleOrder={this.props.singleOrder} />
      </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrderContainer);
