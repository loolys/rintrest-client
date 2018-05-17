import React from "react";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { CREATE_USER } from "../Queries/UserMutations";

import { Form, FormGroup, Col, FormControl, Button } from "react-bootstrap";

export default ({ handleRegistration }) => (
  <Mutation mutation={CREATE_USER}>
    {createUser => (
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validate={values => {
          let errors = {};

          if (!values.username) {
            errors.username = "Can't be empty";
          }

          if (!values.password) {
            errors.password = "Can't be empty";
          }
          return errors;
        }}
        onSubmit={async (
          values,
          { setSubmitting, setErrors, setFieldError }
        ) => {
          const response = await createUser({
            variables: { username: values.username, password: values.password }
          });
          if (!response.data.createUser.success) {
            console.log("runs");
            setFieldError("username", response.data.createUser.error.message);
          } else {
            handleRegistration(response.data.createUser);
          }
        }}
        render={({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} horizontal>
            <FormGroup>
              <Col sm={2}>Username</Col>

              <Col sm={6}>
                <FormControl
                  onChange={handleChange}
                  name="username"
                  value={values.username}
                  type="text"
                  placeholder="Username"
                />
                {errors.username && <div>{errors.username}</div>}
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2}>Password</Col>

              <Col sm={6}>
                <FormControl
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                  type="password"
                  placeholder="password"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2}>
                <Button type="submit">Register</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      />
    )}
  </Mutation>
);
