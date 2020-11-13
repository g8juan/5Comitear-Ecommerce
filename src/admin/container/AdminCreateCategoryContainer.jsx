import React from "react";
import AdminCategory from "../components/AdminCategory";
import axios from "axios";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    userType: state.users.user.userType,
  };
}

class AdminCreateCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false,
      errorUnique: false,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.userType !== "3" && this.props.userType !== "2")
      this.props.history.push("/home");
  }

  onChangeHandler(event) {
    let value = event.target.value;
    this.setState({
      [event.target.id]: value.toLowerCase(),
      errorUnique: false,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.name === "") this.setState({ error: true });
    else {
      return axios
        .post("/api/categories/", {
          name: this.state.name,
        })
        .then(() => this.props.history.push("/categories"))
        .catch((err) => this.setState({ errorUnique: true }));
    }
  }

  render() {
    return (
      <AdminCategory
        onSubmit={this.onSubmitHandler}
        onChange={this.onChangeHandler}
        name={this.state.name}
        error={this.state.error}
        errorUnique={this.state.errorUnique}
      />
    );
  }
}

export default connect(mapStateToProps, null)(AdminCreateCategoryContainer);
