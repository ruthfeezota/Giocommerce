import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      <div className="ratio ratio-1x1 video-iframe">
      <iframe
        src="https://www.youtube.com/embed/nf5A40WXLrc"
        title="Woaom V.1"
        allowfullscreen
      ></iframe>
    </div>
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Procurement software for your strategic sourcing
        </h1>
        <p className="primary-text">
        Our e-sourcing platform has been created to help African purchasers throughout the entire source to contract process. Revive the way you build and manage your RFPs by replacing manual emails and attachments, with intuitive evaluation and communication tools.
        </p>
        <div className="about-buttons-container">
        <a href="#demo" >
          <button className="secondary-button" >Request a Demo</button>
        </a>
          <a href="https://youtu.be/nf5A40WXLrc" >
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Demo Video
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
