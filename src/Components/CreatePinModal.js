import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class CreatePin extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="create-pin">
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Create new Pin
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Create Pin</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem ipsum dolor sit amet.</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
