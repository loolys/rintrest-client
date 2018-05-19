import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Register from "../Components/Register";

export default class RegisterContainer extends Component {
  state = {
    successfulRegistration: false
  };

  handleRegistration = response => {
    this.setState({
      successfulRegistration: response.success
    });
  };
  render() {
    const { successfulRegistration } = this.state;

    const conditionalRender = successfulRegistration ? (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              Registration Successful
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            Congratulations, You are now registered! Go to login to begin.
          </Panel.Body>
        </Panel>
      </div>
    ) : (
      <Register handleRegistration={this.handleRegistration} />
    );
    return <div>{conditionalRender}</div>;
  }
}
