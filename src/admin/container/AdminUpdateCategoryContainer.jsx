import React from "react";
import AdminUpdateCategory from "../components/AdminUpdateCategory";
import { connect } from "react-redux";
import { updateCategoryName } from "../../categories/categoriesActionCreators";

function mapStateToProps(state) {
  return {
    categorySelected: state.categories.categorySelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCategoryName: (id, name) => dispatch(updateCategoryName(id, name)),
  };
}

class AdminUpdateCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.categorySelected,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let value = e.target.value;
    this.setState({ [e.target.id]: value }, () => console.log(this.state));
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    await this.props.updateCategoryName({
      id: this.state.id,
      name: this.state.name,
    });
    this.props.history.push("/categories");
  }

  render() {
    return (
      <AdminUpdateCategory
        //name={this.state.name}
        onChange={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUpdateCategoryContainer);
