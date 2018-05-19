import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import decode from "jwt-decode";

import "./Navbar.css";

export default class NavbarComponent extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    let decoded = "";
    if (this.props.isAuthenticated()) {
      try {
        const token = localStorage.getItem("token");
        decoded = decode(token);
      } catch (e) {}
    }

    const loggedIn = this.props.isAuthenticated() ? (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>Rintrest</Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to={`/profile/${decoded.username}`} eventKey={1}>
            <NavItem>{decoded.username}</NavItem>
          </LinkContainer>
          <NavItem onClick={this.handleLogout}>Logout</NavItem>
        </Nav>
      </Navbar>
    ) : (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>Rintrest</Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/login" eventKey={1}>
            <NavItem>Login</NavItem>
          </LinkContainer>
          <LinkContainer to="/register" eventKey={2}>
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
    return <div>{loggedIn}</div>;
  }
}
