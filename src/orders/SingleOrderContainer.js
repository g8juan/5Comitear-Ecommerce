import React from "react";
import SingleOrder from "./SingleOrder";
import { connect } from "react-redux";
import { selectSingleOrder } from "./ordersActionCreators";


function mapStateToProps(state, ownProps) {
  return {
    singleOrder: state.orders.singleOrder
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectSingleOrder: (id) => dispatch(selectSingleOrder(id))
  };
}


class SingleOrderContainer extends React.Component {

  componentDidMount() {
    console.log('COMPONENTE DID MOUNT')
    this.props.selectSingleOrder(this.props.match.params.id)
  }

  render() {
    console.log(this.props.singleOrder, 'THIS PROPS SINGLE ORDER')

    return (
      <div>
        <SingleOrder singleOrder={this.props.singleOrder} />
      </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrderContainer);
