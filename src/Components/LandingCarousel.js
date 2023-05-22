import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../index.css';




class landingCarouselComponent extends React.Component {
render() {
return (

  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="Image 1" />
      <div className="carousel-caption">
      <h1>WE SUPPORT <br/>AFRICAN INDUSTRY</h1>
        <p>Some text describing the carousel</p>
        <button className="btn btn-outline-light square rounded-0">JOIN EMAIL LIST</button>
        <button className="btn btn-outline-light square rounded-0 ms-2 ">REQUEST A DEMO</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="Image 2" />
      <div className="carousel-caption">
        <h1>Carousel Header</h1>
        <p>Some text describing the carousel</p>
        <button className="btn btn-primary">Button 1</button>
        <button className="btn btn-secondary">Button 2</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="Image 3" />
      <div className="carousel-caption">
        <h1>WE SUPPORT <br/>AFRICAN INDUSTRY</h1>
        <p>Some text describing the carousel</p>
        <button className="btn btn-primary">JOIN EMAIL LIST</button>
        <button className="btn btn-secondary ">LAUNCH DAY</button>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
);

{/* 
  <div>
    <div className='container-fluid' >
      {/* <div className="row"> 
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
                  <h3 class="fs-1 fw-bold text-left">WE SUPPORT <br/>AFRICAN INDUSTRY</h3>
                  <Button href="/" variant="outline-light" type="submit" size="lg" className="square rounded-0">JOIN EMAIL LIST</Button>{' '}
                  <Button href="/" variant="outline-light" type="submit" size="lg" className="square rounded-0">LAUNCH DAY</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
     
    </div>
  </div>
  */}
  

  };
}
//ADD MORE SLIDES
//https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
export default landingCarouselComponent;