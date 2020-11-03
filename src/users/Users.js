/*

import {connect} from 'react-redux'
import React from 'react';


//Usar mapStateToProps y mapDispatchToProps siempre que se pueda, y evitar en lo posible estados locales y store.getState() o useState(). Tampoco usar useSelector o useDispatch. 
function mapStateToProps(state, ownProps) {
  return {
    
    //userName: state.users.user.name
    
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    
    getUser: (idNum) => dispatch(getUser(idNum))
    setUser: (userObj) => dispatch(setUser(userObj))
    ...
    
  }
}

//cualquier función que no necesite "this"
function cualquierFuncionQueNoNecesiteThis() {}


class Users extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount(previousProps, previousState) {}

  handleClick = () => {}
  //ejemplo
  const handleChange = (event) => {}
  


  render() {
    return (
      <div></div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

  */

