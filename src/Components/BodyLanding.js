import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const WorksLanding = () => <body className="page-footer bg-black font-small text-white pt-4">
    <Row className="justify-content-md-center">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            {/* <div className="col-md-12 mt-md-0 mt-3"> */}
                <h3 className="text-uppercase">How It Works</h3>
                <Col xs>
                <h4>Global</h4>
                </Col>
                <Col xs={{ order: 12 }}>
                <h4>Shopping</h4>
                </Col>
                <Col xs={{ order: 1 }}>
                <h4>Logistics</h4>
                </Col>
            </div>
        </div>
    {/* </div> */}
    </Row>
    <Row className="justify-content-md-center">
        <div className="container-fluid text-center text-md-left">
            <h4>HOW IT WORKS</h4>
        </div>
    </Row>

</body>

export default WorksLanding;