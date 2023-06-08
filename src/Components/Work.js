import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Locate Suppliers",
      text: "Locate businesses on app to to help leverage technology for reaching untapped markets and expanding their operations.",
    },
    {
      image: ChooseMeals,
      title: "Shop on App",
      text: "Our platform is fueling innovation and entrepreneurship in B2B e-commerce across Africa.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Logistics serves as a crucial cornerstone of Africa's economy, playing an indispensable role in facilitating trade",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        The Woaom B2B e-commerce platform is revolutionizing Africa by providing an unprecedented gateway to a vast network of suppliers and customers.
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
