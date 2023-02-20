import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";



class landingCarouselComponent extends React.Component {
render() {
return (
  <div>
    <div className='container-fluid' >
      {/* <div className="row"> */}
        <div className="col-sm-12">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <img
              className="d-block w-100" style={{ height: 800}}
              src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png"
              alt="First slide"
              />
                <Carousel.Caption className="carousel-caption text-left ms-5 mt-5 pt-5 " >
                  <h3 class="fs-1 fw-bold text-left">WE SUPPORT <br/>CHEMICALS INDUSTRY</h3>
                  <Button href="#" variant="outline-light" type="submit" size="lg" className="square rounded-0">JOIN EMAIL LIST</Button>{' '}
                  <Button href="#" variant="outline-light" type="submit" size="lg" className="square rounded-0">LAUNCH DAY</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      {/* </div> */}
    </div>
  </div>
  )
  };
}
//ADD MORE SLIDES
//https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
export default landingCarouselComponent;