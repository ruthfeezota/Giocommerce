import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";



import 'bootstrap/dist/css/bootstrap.min.css';

function LandEmail() {
  return (
    <Form className="bg-black text-white text-center align-center">
      <Row className="justify-content-md-center">
        <Form.Group className="mb-3" controlId="landingEmail">
          <Form.Label >JOIN OUR EMAIL LIST</Form.Label>
          <Col sm="2">
          <Form.Control className="smaller-input" type="email" placeholder="EMAIL" />
          </Col>
        </Form.Group>
        <Button variant="warning" type="submit">
          SUBMIT
        </Button>
    </Row>
    </Form>

  );
}

export default LandEmail;