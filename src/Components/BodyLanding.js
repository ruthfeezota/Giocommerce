import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import '../index.css'


const WorksLanding = () => <body className="page-footer bg-black font-small text-white pt-4 pb-5">
    <Row className="justify-content-md-center ">
    <Col xs className="">
    <div className="container-fluid text-center text-md-left">
        <div className="row text-center justify-content-center col-md-12 pb-5">
            {/* <div className="col-md-12 mt-md-0 mt-3"> */}
            <div class="ms-5 " style={{ width: 350}}>
                <Col xs >
                <img
              className=""
              src="https://i.ibb.co/d79RYZn/earthicon.png"
              alt="Earth Icon"
              />
                <h4 className="pt-3">African Focused</h4>
                <h6>
                The Woaom B2B e-commerce platform is revolutionizing Africa by providing an unprecedented gateway to a vast network of suppliers and customers.
              </h6>
                </Col>
                </div>
                <div class="ms-5 " style={{ width: 350}}>
                <Col xs={{ order: 12 }}>
                <img
              className=""
              src="https://i.ibb.co/f9PZ6mP/carticon.png"
              alt="Cart Icon"
              />
                <h4 className="pt-3">Shopping</h4>
                <h6>
                Our platform is fueling innovation and entrepreneurship in B2B e-commerce across Africa, empowering businesses to leverage technology for reaching untapped markets and expanding their operations. 
              </h6>
                </Col>
                </div>
                <div class="ms-5 " style={{ width: 350}}>
                <Col xs={{ order: 1 }}>
                <img
              className=""
              src="https://i.ibb.co/YbJk2BX/truckicon.png"
              alt="Truck Icon"
              />
                <h4 className="pt-3">Logistics</h4>
                <h6>
                Logistics serves as a crucial cornerstone of Africa's economy, playing an indispensable role in facilitating trade and commerce throughout the continent. Woaom serves as the driving force behind African logistics, offering a robust platform that empowers seamless operations and efficient supply chain management.
              </h6>
                </Col>
                </div>
            </div>
            <hr />

            <div class="container mb-3">                      
    <div class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
            <h2 class="font-weight-bold pt-5">App Roadmap</h2>
            <p class="text-muted">Woaom prepares for launch Jan 2024 in Ghana and an additional 3 countries in 2025</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">August 2023</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">User Testing Starts</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">September 2023</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Partnership With AfCFTA</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">January 2024</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launch in Ghana</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">December 2024</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Launch in Other African Countries</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
            </Col>
    {/* </div> */}
    </Row>
    
    

</body>


export default WorksLanding;