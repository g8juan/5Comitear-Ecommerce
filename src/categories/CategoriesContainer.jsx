import React from "react";
import { connect } from "react-redux";
import {
  deleteCategory,
  getCategories,
  getSingleCategory,
} from "./categoriesActionCreators";
import Categories from "./Categories";

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    userType: state.users.user.userType,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getSingleCategory: (id) => dispatch(getSingleCategory(id)),
  };
}

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  handleDelete = async (id) => {
    await this.props.deleteCategory(id);
    this.props.getCategories();
  };

  handleEdit = async (id) => {
    await this.props.getSingleCategory(id);
    this.props.history.push("/admin/category/update");
  };

  render() {
    return (
      <div>
        <Categories
          categories={this.props.categories}
          userType={this.props.userType}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);

/*     {this.props.categories.map((category) => {
          return (
            <div key={category.id}>
              <Link to={`${this.props.match.url}/${category.id}`}>
                <ListItem button>
                  <ListItemText primary={category.name.toUpperCase()} />
                </ListItem>
              </Link>
              <Divider />
          
            </div>
          );
        })} */
