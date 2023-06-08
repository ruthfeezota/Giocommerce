import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Join Our Launch</h1>
      <h1 className="primary-heading">Email List</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="email@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
