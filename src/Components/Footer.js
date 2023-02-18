import React from "react"
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Footer = () => <footer className="bg-black text-white fixed-bottom">
    <Row className="justify-content-md-center me-2 py-3">
    <div className="container-fluid text-center text-md-left">
        <div className="row col-md-12 mt-md-12">
            {/* <div className="col-md-12 mt-md-0 mt-3"> */}

                <Col xs>
                <h6>EMAIL LIST</h6>
                </Col>
                <Col xs={{ order: 12 }}>
                <h6>LAUNCH DAY</h6>
                </Col>
                <Col xs={{ order: 1 }}>
                <h6>GAME PLAN</h6>
                </Col>
            </div>
        </div>
    {/* </div> */}
    </Row>




</footer>

export default Footer;