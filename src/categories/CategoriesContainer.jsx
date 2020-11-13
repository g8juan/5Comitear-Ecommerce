import React from "react";
import { connect } from "react-redux";
import { getCategories } from "./categoriesActionCreators";
import Categories from './Categories'

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
  };
}
function mapDispatchToProps(dispatch) {
  return { getCategories: () => dispatch(getCategories()) };
}

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    // this.props.categories && console.log(`${this.props.match.url}/${this.props.categories[0].name}`)
    return (
      <Categories categories={this.props.categories} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);