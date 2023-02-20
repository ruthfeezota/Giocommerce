import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../db'

function LandEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('email')
    .add({
      email: email,
    })

    .then(() => {
      alert('Email has be submitted')
    })
    .catch((error) => {
      alert(error.message);
    });

    setEmail("");
  };

  return (
    <Form className="bg-black text-white text-center align-center pt-3" onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Form.Group className="mb-3" controlId="landingEmail">
          <Form.Label className="fs-5 mt-2 text-warning">JOIN OUR EMAIL LIST</Form.Label>
          <Col sm="2" className="offset-1 col-lg-3 offset-lg-5 div-wrapper d-flex justify-content-center align-items-center">
          <Form.Control className="square rounded-0 border border-white bg-black text-white" type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Button variant="warning" type="submit" className="ml-2 square rounded-0">
          SUBMIT
        </Button>
          </Col>
        </Form.Group>

    </Row>
    </Form>

  );
}
export default LandEmail;