import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import '../index.css'


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

            <div class="container">                      
    <div class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
            <h2 class="font-weight-bold">How It Works</h2>
            <p class="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2003</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2004</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2005</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2010</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2020</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">In Fortune 500</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
    {/* </div> */}
    </Row>
    
    

</body>


export default WorksLanding;