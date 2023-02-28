import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import Card from 'react-bootstrap/Card';


function VideoSec() {
  return (
    <Card className="bg-dark text-white text-center" style={{borderRadius: 0}} >
      <Card.Img src="https://i.ibb.co/BK9C1jK/np-file-55124-3-2.png" calt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className=" pt-5"><h1>ABOUT WOAOM</h1></Card.Title>
        <Card.Text className="text-white col-md-5 pr-5 text-md-left" style={{top: 230, left: 100}}>
       <h5> Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully supported and funded diverse small businesses by providing Special Purpose Credit Programs (SPCP) to make loans that consider expanded credit criteria. </h5>
        </Card.Text>
        <Card.Text class="ratio ratio-4x3 ms-auto" style={{ width: 660, height: 300, right: 60}}>
        <iframe src="https://www.youtube.com/embed/nf5A40WXLrc" title="Gioocommerce Demo Video" allowFullScreen></iframe>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default VideoSec;