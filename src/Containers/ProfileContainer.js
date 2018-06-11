import React, { Component } from "react";
import decode from "jwt-decode";
import CreatePin from "../Components/CreatePinModal";
import Profile from "../Components/Profile";

export default class ProfileContainer extends Component {
  state = {
    token: "",
    user: ""
  };

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem("token") || ""
    });
    try {
      const { username } = decode(localStorage.getItem("token"));
      this.setState({
        user: username
      });
    } catch (e) {}
  };

  render() {
    const { token, user } = this.state;
    console.log(token);
    return (
      <div>
        <CreatePin token={token} user={user} />
        <Profile token={token} />
      </div>
    );
  }
}
