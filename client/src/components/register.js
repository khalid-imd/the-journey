import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal className="modal-sm" show={show} onHide={handleClose}>
        <Modal.Body className="p-4">
          <Modal.Title className="items-center mb-3 text-center">
            Register
          </Modal.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone"
                autoFocus
              />
            </Form.Group>
          </Form>
          <p>
            Already have an account? <strong>click here</strong>
          </p>
          <Button className="col-12" variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
