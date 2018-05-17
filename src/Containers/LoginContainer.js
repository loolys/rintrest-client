import React, { Component } from "react";
import Login from "../Components/Login";

export default class LoginContainer extends Component {
  handleLogin = response => {
    if (response.success) {
      localStorage.setItem("token", response.token);
      this.props.history.push("/");
    }
  };
  render() {
    return <Login handleLogin={this.handleLogin} />;
  }
}
