import React from "react";
import {connect} from 'react-redux'
import ProductsContainer from '../products/components/productsContainer'
import {Route, Link} from 'react-router-dom'
import {getCategories} from './categoriesActionCreators'


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



function mapStateToProps(state) {
  return {
    categories: state.categories.categories
  }
}
function mapDispatchToProps(dispatch) {return ({getCategories: () => dispatch(getCategories())})}

class CategoriesContainer extends React.Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Hola
        {this.props.categories.map((category) => {
          return (
            <div key={category.id}>
              {category.name}
              <Link to={`${this.props.match.url}/${category.name}`}>
                <ListItem button>
                  <ListItemText primary={(category.name).toUpperCase()} />
                </ListItem>
              </Link>
              <Divider />


              <Route path={`${this.props.match.url}/${category.name}`} render={() => {
                console.log("ENTRE ACA")
                  return (<ProductsContainer categoryId={category.id} />)
              }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)

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