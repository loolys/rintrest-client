import React from "react";
import { Form, FormGroup, Col, FormControl } from "react-bootstrap";

export default () => {
  return (
    <Form horizontal>
      <FormGroup>
        <Col sm={2}>Email</Col>

        <Col sm={6}>
          <FormControl type="email" placeholder="email" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2}>Password</Col>

        <Col sm={6}>
          <FormControl type="password" placeholder="password" />
        </Col>
      </FormGroup>
    </Form>
  );
};
