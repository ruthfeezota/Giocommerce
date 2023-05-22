import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";



function VideoSec() {
  return (

    <div className="container bg-black text-white text-center align-center">
    <h3 className="">ABOUT WOAOM</h3>
    <h6> Woaom is a B2B e-commerce game-changer for African businesses, providing them with unprecedented access to products and suppliers from all over the continent. We are a online marketplace that allow African B2B customers to shop products from factors all around Africa, businesses can now source materials, goods, and services from a wide range of suppliers, helping them to reduce costs, improve quality, and increase their competitiveness. </h6>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src="https://i.ibb.co/BK9C1jK/np-file-55124-3-2.png"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  </div>
);


  {/* 

  import Card from 'react-bootstrap/Card';
  import { Col } from "react-bootstrap";
    <Col sm className="">
    <Card className="bg-dark text-white text-center" style={{borderRadius: 0}} >
      <Card.Img src="https://i.ibb.co/BK9C1jK/np-file-55124-3-2.png" calt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className=" pt-5"><h1>ABOUT WOAOM</h1></Card.Title>
        <Card.Text className="text-white col-md-5 pr-5 text-md-left" style={{top: 230, left: 100}}>
        <h5>
        Woaom is a B2B e-commerce game-changer for African businesses, providing them with unprecedented access to products and suppliers from all over the continent. We are a online marketplace that allow African B2B customers to shop products from factors all around Africa, businesses can now source materials, goods, and services from a wide range of suppliers, helping them to reduce costs, improve quality, and increase their competitiveness. </h5>
        </Card.Text>
        <Card.Text class="ratio ratio-4x3 ms-auto" style={{ width: 660, height: 300, right: 60}}>
        <iframe src="https://www.youtube.com/embed/nf5A40WXLrc" title="Gioocommerce Demo Video" allowFullScreen></iframe>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
  );
  */}
}

export default VideoSec;