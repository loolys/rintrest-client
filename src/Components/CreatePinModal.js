import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

import CreatePinForm from "./CreatePinForm";

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

  validateForm = values => {
    let errors = {};
    if (!values.image) {
      errors.image = "Please add image before saving";
    }
    if (!values.text) {
      errors.text = "Please add some descriptive text before saving";
    }
    return errors;
  };

  render() {
    const { user } = this.props;
    return (
      <div className="create-pin">
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Create new Pin
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Create Pin</Modal.Title>
          </Modal.Header>
          <CreatePinForm
            handleClose={this.handleClose}
            validateForm={this.validateForm}
            user={user}
          />
        </Modal>
      </div>
    );
  }
}
