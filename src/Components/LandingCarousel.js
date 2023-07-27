import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';




class landingCarouselComponent extends React.Component {
render() {
return (

  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="slide 1" />
      <div className="carousel-caption pt-0">
      <h1 className="text-left font-weight-bold"><b>Next Level African Procurement</b></h1>
        <p className="text-left col-md-8 ps-0">Africa's First Procurement Platform focused on intercontinental trade</p>
        <div className="d-flex text-left">
          <button className="btn btn-outline-light square rounded-0 ">JOIN EMAIL LIST</button>
          <button className="btn btn-outline-light square rounded-0 ms-2 ">REQUEST A DEMO</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="slide 2" />
      <div className="carousel-caption">
        <h1>Carousel Header</h1>
        <p>Some text describing the carousel</p>
        <button className="btn btn-primary">Button 1</button>
        <button className="btn btn-secondary">Button 2</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" className="d-block w-100" alt="slide 3" />
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



  };
}
//ADD MORE SLIDES
//https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
export default landingCarouselComponent;