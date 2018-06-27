import React, { Component } from "react";
import decode from "jwt-decode";
import CreatePin from "../Components/CreatePinModal";
import Profile from "../Components/Profile";

export default class ProfileContainer extends Component {
  state = {
    token: "",
    user: "",
    profile: ""
  };

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem("token") || "",
      profile: this.props.match.params.user
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
    return (
      <div>
        {this.state.user === this.state.profile && (
          <CreatePin token={token} user={user} />
        )}
        <Profile profile={this.state.profile} />
      </div>
    );
  }
}
