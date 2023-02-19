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
               
                <Col xs>
                <img
              className=""
              src="https://i.ibb.co/d79RYZn/earthicon.png"
              alt="Earth Icon"
              />
                <h4>Global</h4>
                <h5>
              Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully
              </h5>
                </Col>
                <Col xs={{ order: 12 }}>
                <img
              className=""
              src="https://i.ibb.co/f9PZ6mP/carticon.png"
              alt="Cart Icon"
              />
                <h4>Shopping</h4>
                <h5>
              Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully
              </h5>
                </Col>
                <Col xs={{ order: 1 }}>
                <img
              className=""
              src="https://i.ibb.co/YbJk2BX/truckicon.png"
              alt="Truck Icon"
              />
                <h4>Logistics</h4>
                <h5>
              Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully
              </h5>
                </Col>
            </div>
            <div>
            <h4 className="text-uppercase bold text-warning">How It Works</h4>
            </div>

        </div>
    {/* </div> */}
    </Row>
    
    

</body>


export default WorksLanding;