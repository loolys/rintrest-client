import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

export default class componentName extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="brand" href="#">
              Rintrest
            </a>
          </Navbar.Brand>
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
