import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "./categoriesActionCreators";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
      <div>
        {this.props.categories.map((category) => {
          return (
            <div key={category.id}>
              {category.name}
              <Link to={`${this.props.match.url}/${category.id}`}>
                <ListItem button>
                  <ListItemText primary={category.name.toUpperCase()} />
                </ListItem>
              </Link>
              <Divider />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);

// const App = () => (
//   <div>
//     <Route path="/tacos" component={Tacos} />
//     <Route path="/home" render={() => <Products />} />
//   </div>
// );

// // when the url matches `/tacos` this component renders
// const Tacos = ({match}) => (
//   // here's a nested div
//   <div>
//     {/* here's a nested Route,
//         match.url helps us make a relative path */}
//     <Route path={match.url + "/carnitas"} component={Carnitas} />
//   </div>
// );
