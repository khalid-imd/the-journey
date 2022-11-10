import React from "react";
import { Form, Button, FloatingLabel, FormLabel } from "react-bootstrap";
import "./newJourney.css";

function Editor() {
  return (
    <div className="mx-auto mt-5 w-75 row">
      <h2 className="title col-12 title">New Journey</h2>
      <Form className="mt-5 row">
        <div className="row mb-4">
          <FormLabel className="journey-title"> Title </FormLabel>
          <div className="col-lg-9 order-lg-1 order-1 pb-3">
            <Form.Control
              type="text"
              placeholder="Add your journey title"
              name="title"
            />
          </div>
          <div className="col-lg-3 order-lg-1 order-2 pb-3">
            <input
              type="file"
              name="image"
              class="form-control input-group-text w-100 rounded-end"
              id="inputGroupFile01"
            />
          </div>
        </div>
        <div className="col-lg-12 order-lg-2 order-3 pb-5">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Journey Descriptions"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "300px" }}
            />
          </FloatingLabel>

          <Button
            type="submit"
            className="col-lg-3 offset-lg-9 order-lg-3 order-4 mb-5 mt-5 text-decoration-none"
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Editor;
