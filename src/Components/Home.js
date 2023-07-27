import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Accelerate your construction business throughout Africa
          </h1>
          <p className="primary-text">
          Attract and win more clients, run profitable projects, and deliver a standout customer experience. Grow your business with estimating, project management, and marketing – all in one solution.
          </p>
          <a href="#contact">
          <button  className="secondary-button">
            Join Our Mailing List <FiArrowRight />{" "}
          </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
