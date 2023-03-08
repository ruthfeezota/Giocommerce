import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";


function VideoSec() {
  return (
    <Col xl className="">
    <Card className="bg-dark text-white text-center bg-black" style={{borderRadius: 0, marginRight: 0}} >
      <Card.Img src="https://i.ibb.co/BK9C1jK/np-file-55124-3-2.png" calt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="pt-5"><h1>ABOUT WOAOM</h1></Card.Title>
        <Card.Text className="text-white col-xl-5 pr-5 text-md-left" style={{top: 90, left: 100}}>
       <h5> Woaom is a B2B e-commerce game-changer for African businesses, providing them with unprecedented access to products and suppliers from all over the continent. We are a online marketplace that allow African B2B customers to shop products from factors all around Africa, businesses can now source materials, goods, and services from a wide range of suppliers, helping them to reduce costs, improve quality, and increase their competitiveness.
       < br/>
       < br/>

      At Woaom, we offer an extensive range of products, from raw materials and agricultural products to finished goods and machinery, providing African businesses with a one-stop-shop for their procurement needs. Users can buy products from factors all around Africa, businesses can reduce their dependence on imports and strengthen regional trade and economic integration.
      < br/>
      < br/>
 </h5>
        </Card.Text>
        <Card.Text class="ratio ratio-4x3 ms-auto" style={{ width: 760, height: 400, right: 100, top: 10}}>
        <iframe src="https://www.youtube.com/embed/nf5A40WXLrc" title="Gioocommerce Demo Video" allowFullScreen></iframe>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
  );
  
}

export default VideoSec;