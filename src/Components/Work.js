import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

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
      text: "Actionable and informative insights on your RFx processes - enabling you yo make informed decisions",
    },
    {
      image: DeliveryMeals,
      title: "Contracts",
      text: "Create contracts from your awarded RFPs and experience efficient and auditable source to contract processes",
    },
    {
    image: DeliveryMeals,
    title: "Integrations",
    text: "Fast, cost effective and resilient, we make integrations easy, and can integrate into any third-party software",
  },
  {
    image: DeliveryMeals,
    title: "eAuctions",
    text: "Save hours of negotiation time - and reduce your spend - by inviting suppliers to compete online, in real-time",
  },
  {
    image: DeliveryMeals,
    title: "RFx",
    text: "Standardize your Requests, keep your communication in one place and evaluate your suppliers with ease",
  },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Products</h1>
        <p className="primary-text">
        We pack our procurement platform with all of the core features you need to save time, reduce your spend and transact with confidence
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
