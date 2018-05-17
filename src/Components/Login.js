import React from "react";
import { Formik } from "formik";
import { Form, FormGroup, Col, FormControl, Button } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../Queries/UserMutations";

export default ({ handleLogin }) => {
  return (
    <Mutation mutation={LOGIN_USER}>
      {loginUser => (
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
            const response = await loginUser({
              variables: {
                username: values.username,
                password: values.password
              }
            });
            if (response.data.loginUser.success) {
              handleLogin(response.data.loginUser);
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
                  <Button type="submit">Login</Button>
                </Col>
              </FormGroup>
            </Form>
          )}
        />
      )}
    </Mutation>
  );
};
