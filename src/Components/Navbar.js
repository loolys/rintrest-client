import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <NavItem eventKey={1}>
            <Link to="/register">Register</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
