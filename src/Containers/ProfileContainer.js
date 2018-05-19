import React, { Component } from "react";
import CreatePin from "../Components/CreatePinModal";
import Profile from "../Components/Profile";

export default class ProfileContainer extends Component {
  state = {
    token: ""
  };

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem("token") || ""
    });
  };

  render() {
    const { token } = this.state;
    console.log(token);
    return (
      <div>
        <CreatePin token={token} />
        <Profile token={token} />
      </div>
    );
  }
}
