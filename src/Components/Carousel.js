import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class CarouselComponent extends React.Component {
render() {
return (
  <div>
    <div className='container-fluid' >
      <div className="row">
        <div className="col-sm-12">
          <h3>React Bootstrap Carousel</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://i.ibb.co/s5g9YpN/home-Page-Cover.png"
              alt="First slide"
              />
                <Carousel.Caption className="text-">
                  <h3>ENTER INTERFACE</h3>
                  <Button href="#" variant="outline-secondary" type="submit" size="lg">USERS</Button>{' '}
                  <Button href="#" variant="outline-secondary" type="submit" size="lg">MANUFACTURES</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  )
  };
}
//ADD MORE SLIDES
//https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
export default CarouselComponent;