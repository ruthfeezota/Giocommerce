import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Our Tech Stacks</span>
          <span>Request a Demo</span>
        </div>
        <div className="footer-section-columns">
          <span>sales@woaom.com</span>
          <span>Investing in Africa</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
{ /* import React from "react"
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Footer = () => <footer className="bg-black text-white">
    <Row className="justify-content-md-center">
    <div className="text-center">
        <div className="row col-md-12 mt-md-12 pt-2">

                <Col>
                <h6>EMAIL LIST</h6>
                </Col>
                <Col >
                <h6>LAUNCH DAY</h6>
                </Col>
                <Col>
                <h6>GAME PLAN</h6>
                </Col>
            </div>
        </div>
    // </div>
    </Row>




</footer>

export default Footer; */}