import React from 'react';
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar.jsx'
import {getProducts} from '../products/productsActionCreators'

function mapDispatchToProps(dispatch, props) {
  return {
    getProducts: (searchTermStr) => dispatch(getProducts(searchTermStr))
  }
}

class NavigationBarContainer extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const searchTermStr = event.target[0].value
    this.props.getProducts(searchTermStr)
    event.target[0].value = ''
  }

  render() {
    return (
      <div>
        <NavigationBar handleSubmit={this.handleSubmit} cualquiercosa={1}/>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(NavigationBarContainer)