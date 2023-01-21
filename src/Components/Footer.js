import React from "react"
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Footer = () => <footer className="page-footer bg-black font-small text-white pt-4">
    <Row className="justify-content-md-center">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            {/* <div className="col-md-12 mt-md-0 mt-3"> */}
                <h3 className="text-uppercase">How It Works</h3>
                <Col xs>
                <h4>EMAIL LIST</h4>
                </Col>
                <Col xs={{ order: 12 }}>
                <h4>LAUNCH DAY</h4>
                </Col>
                <Col xs={{ order: 1 }}>
                <h4>GAME PLAN</h4>
                </Col>
            </div>
        </div>
    {/* </div> */}
    </Row>




</footer>

export default Footer;