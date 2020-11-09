import React from "react";
import { connect } from "react-redux";
import AdminUsers from "../components/AdminUsers";
import axios from "axios";

function mapStateToProps(state) {
  return {
    userType: state.users.user.userType,
  };
}

class AdminUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    if (this.props.userType === "3") this.getUserArr();
    else {
      this.props.history.push("/");
    }
  }

  getUserArr = () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => res.data)
      .then((users) => this.setState({ users: users }));
  };

  setAdmin = async (userId) => {
    await axios.put(`http://localhost:8000/api/users/admin/users`, {
      id: userId,
      userType: "2",
    });
    await this.getUserArr();
  };

  setUser = async (userId) => {
    await axios.put(`http://localhost:8000/api/users/admin/users`, {
      id: userId,
      userType: "1",
    });
    await this.getUserArr();
  };

  render() {
    return (
      <AdminUsers
        users={this.state.users}
        setAdmin={this.setAdmin}
        setUser={this.setUser}
      />
    );
  }
}

export default connect(mapStateToProps, null)(AdminUsersContainer);
