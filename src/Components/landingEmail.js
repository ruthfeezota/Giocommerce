import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandEmail() {
  return (
    <Form className="bg-black text-white">
      <Form.Group className="mb-3" controlId="landingEmail">
        <Form.Label >JOIN OUR EMAIL LIST</Form.Label>
        <Form.Control type="email" placeholder="EMAIL" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LandEmail;