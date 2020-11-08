import React from "react";
import {connect} from 'react-redux'
import Categories from './categories'
import {getCategories} from '../categoriesActionCreators'

function mapStateToProps(state) {return ({categories: state.categories.categories})}
function mapDispatchToProps(dispatch) {return ({getCategories: () => dispatch(getCategories())})}

class CategoriesContainer extends React.Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <div>
        <Categories categories={this.props.categories} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)