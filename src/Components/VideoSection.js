import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap'


const VideoSec = () => <header style={{ paddingLeft: 0 }}>
  
<div
  className='p-5 text-center bg-image'
  style={{ backgroundImage: "url('https://i.ibb.co/BK9C1jK/np-file-55124-3-2.png')", height: 600}}>
    <Container>
  <div className="">
    <div className='align-items-center h-100'>
      <div className='text-white'>
        <h1 className='mb-3'>ABOUT GIOCOMMERCE</h1>
      </div>
      <div className='text-white col-md-4' style={{top: 80}}>
        <h5>Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully supported and funded diverse small businesses by providing Special Purpose Credit Programs (SPCP) to make loans that consider expanded credit criteria.
        </h5>
      </div>
      <div class="ratio ratio-4x3 ms-auto " style={{ width: 660, height: 300, top: -150}}>
        <iframe src="https://www.youtube.com/embed/nf5A40WXLrc" title="Gioocommerce Demo Video" allowFullScreen></iframe>
      </div>
        
    </div>
    </div>
    </Container>
  </div>
  </header>

export default VideoSec;