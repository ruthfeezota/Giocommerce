import React, { useState } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../db'

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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#FFBD59" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default DemoForm;