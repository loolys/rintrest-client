import React from "react";
import { Formik } from "formik";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  Modal
} from "react-bootstrap";
import _ from "lodash";
import { Mutation } from "react-apollo";
import { CREATE_PIN } from "../Queries/PinQueries";

const divStyle = {
  display: "flex",
  justifyContent: "center"
};

export default ({ handleClose, validateForm, user }) => {
  return (
    <Mutation mutation={CREATE_PIN}>
      {createPin => (
        <Formik
          initialValues={{
            image: "",
            text: ""
          }}
          validate={values => {
            let errors = {};
            if (!values.image) {
              errors.image = "Please add image before saving";
            }
            if (!values.text) {
              errors.text = "Please add some descriptive text before saving";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            const valid = validateForm(values);
            if (_.isEmpty(valid)) {
              await createPin({
                variables: {
                  image: values.image,
                  text: values.text,
                  user: user
                }
              });
              handleClose();
              setSubmitting(false);
            } else {
              console.log("errors");
              setSubmitting(false);
            }
          }}
          render={({ values, errors, handleChange, handleSubmit }) => (
            <div>
              {values.image && (
                <div style={divStyle}>
                  <img src={values.image} alt="Your post" />
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <FormGroup className="create-pin-form">
                    <Col sm={2}>Image Url</Col>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        placeholder="url"
                        name="image"
                        onChange={handleChange}
                        value={values.image}
                        className="create-pin-form-input"
                      />
                    </Col>
                    {errors.image && <Col smOffset={2}>{errors.image}</Col>}
                  </FormGroup>

                  <FormGroup className="create-pin-form">
                    <Col sm={2}>Text</Col>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        placeholder="Text"
                        name="text"
                        onChange={handleChange}
                        value={values.text}
                      />
                    </Col>
                    {errors.image && <Col smOffset={2}>{errors.text}</Col>}
                  </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button type="submit" bsStyle="success">
                        Save
                      </Button>
                      <Button bsStyle="warning" onClick={handleClose}>
                        Cancel
                      </Button>
                    </Col>
                  </FormGroup>
                </Modal.Footer>
              </Form>
            </div>
          )}
        />
      )}
    </Mutation>
  );
};
