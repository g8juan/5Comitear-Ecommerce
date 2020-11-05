import React from "react";
import { connect } from 'react-redux'
import Categories from './categories'
import { getCategories } from '../categoriesActionCreators'

const mapStateToProps = (state) => ({ categories : state.categories.categories})
const mapDispatchToProps = (dispatch) => ({ getCategories : () => dispatch(getCategories())})

class CategoriesContainer extends React.Component {

  componentDidMount(){ 
    this.props.getCategories()
  }

  render() {
    return ( 
    <div>
      CATEGORIES
      <Categories categories={this.props.categories}/>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)