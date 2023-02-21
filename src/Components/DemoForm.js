import React, { useState } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../db'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FormGroup, Row } from "react-bootstrap";
import '../index.css';

function DemoForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");


  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('demo')
    .add({
      name: name,
      email: email,
      company: company,
      message: message,
    })

    .then(() => {
      alert('Form has be submitted 👍')
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };


  return (
    <Form className="bg-black text-white text-center align-center pt-5 mt-5"  style={{ height: 900}} onSubmit={handleSubmit}>
            <Row className="justify-content-md-center">
        <h1 className="mt-5 pb-5">Request a Demo</h1>
        <FormGroup className="mb-3">
            <label className="me-2">Name</label>
            <input className="square rounded-0 border border-white bg-black text-white "
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </FormGroup>
        <FormGroup className="mb-3">
            <label className="me-2">Email</label>
            <input className="square rounded-0 border border-white bg-black text-white "
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup className="mb-3">
            <label className="me-2">Company</label>
            <input className="square rounded-0 border border-white bg-black text-white "
                placeholder=""
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
         </FormGroup>
         <FormGroup className="mb-3">
            <label className="me-2">Message</label>
            <textarea className="square rounded-0 border border-white bg-black text-white"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
        </FormGroup>

        <FormGroup className="mb-3">
            <button
                type="submit"
                style={{ background: loader ? "#FFBD59" : "#FFBD59" }}
            >
                Submit
            </button>
        </FormGroup>
        </Row>
    </Form>
  );

};

export default DemoForm;