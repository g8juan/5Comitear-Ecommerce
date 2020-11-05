import React from 'react';
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar.jsx'
import {getProducts} from '../products/productsActionCreators'
import {withRouter} from 'react-router-dom'


function mapDispatchToProps(dispatch, ownprops) {
  return {
    getProducts: (searchTermStr) => dispatch(getProducts(searchTermStr))
  }
}


class NavigationBarContainer extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const searchTermStr = event.target[0].value
    this.props.history.push({pathname:'/products', search: `?s=${searchTermStr}`})
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

export default withRouter(connect(null, mapDispatchToProps)(NavigationBarContainer))