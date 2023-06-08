import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        E-commerce game-changer for African businesses
        </h1>
        <p className="primary-text">
        Woaom is a B2B procurement web application that allow
          African B2B customers to shop products from factors all around Africa,
          businesses can now source materials, goods, and services from a wide
          range of suppliers.
        </p>
        <p className="primary-text">
        This helps them reduce costs, improve quality, and
          increase their competitiveness.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Demo Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
