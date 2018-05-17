import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

export default class componentName extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>Rintrest</Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/register" eventKey={1}>
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
