import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoSec = () => <header style={{ paddingLeft: 0 }}>
<div
  className='p-5 text-center bg-image'
  style={{ backgroundImage: "url('https://i.ibb.co/s5g9YpN/home-Page-Cover.png')", height: 400 }}
>
  <div className='mask'>
    <div className='align-items-center h-100'>
      <div className='text-white'>
        <h1 className='mb-3'>ABOUT GIOCOMMERCE</h1>
      </div>
      <div className='text-white col-md-4'>
        <h5>Diverse small business owners have struggled to get the funding they need to begin, support, and grow their business. Many banks have successfully supported and funded diverse small businesses by providing Special Purpose Credit Programs (SPCP) to make loans that consider expanded credit criteria.
        </h5>
      </div>
      <div className="App">
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
    </div>
  </div>
</div>
</header>

export default VideoSec;