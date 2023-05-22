import React, { useState } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../db'
import "../styles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";

function LandEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('email')
    .add({
      email: email,
    })

    .then(() => {
      alert('Email has be submitted 👍')
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
          <Col sm="2 pb-5" className="col-lg-5 offset-lg-4 div-wrapper d-flex">
          <Form.Control className="square rounded-0 border border-white bg-black text-white" type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Button variant="warning" type="submit" className="ml-2 square rounded-0">
          SUBMIT
        </Button>
          </Col>
          <hr />
        </Form.Group>

       </Row>
    </Form>

  );


      {/* 

 <div className="container bg-black full-width text-white text-center align-center pt-3" onSubmit={handleSubmit}>
      <h5>Subscribe to our Newsletter</h5>
      <div className="input-group">
        <input
          type="email"
          className="form-control bg-black square rounded-0 input-box"
          placeholder="Enter your email"
          aria-label="Email"
          aria-describedby="email-button"
        />
        <button className="btn btn-warning square rounded-0 ms-1" id="email-button" type="button">Subscribe</button>
      </div>
    </div>
  );

  */}

}
export default LandEmail;