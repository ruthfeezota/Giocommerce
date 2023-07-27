import React from "react";
import PickMeals from "../Assets/supplier-discovery-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import RFx from "../Assets/about-background-image-7.png";
import eAuctions from "../Assets/about-background-image-6.png";
import Integrations from "../Assets/about-background-image-5.png"
import Contracts from "../Assets/about-background-image-4.png"
import Ratio from 'react-bootstrap/Ratio';



const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Supplier Discovery",
      text: "Tell us your requirements, hit search and explore a list of new suppliers in just a few minutes",
    },
    {
      image: ChooseMeals,
      title: "Reporting",
      text: "Actionable and informative insights on your RFx processes - enabling you to make informed decisions",
    },
    {
      image: Contracts,
      title: "Contracts",
      text: "Create contracts from your awarded RFPs and experience efficient and auditable source to contract processes",
    },
    {
    image: Integrations,
    title: "Integrations",
    text: "Fast, cost effective and resilient, we make integrations easy, and can integrate into any third-party software",
  },
  {
    image: eAuctions,
    title: "eAuctions",
    text: "Save hours of negotiation time - and reduce your spend - by inviting suppliers to compete online, in real-time",
  },
  {
    image: RFx,
    title: "RFx",
    text: "Standardize your Requests, keep your communication in one place and evaluate your suppliers with ease",
  },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading">Access to the right tools to manage your projects, and buy the right equipment.</h1>
        <p className="primary-text">
        Work more efficiently, communicate better, and build faster from a single source of truth. See how you can do more on the leading construction management platform.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Work;
