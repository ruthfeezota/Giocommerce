import React from "react";
import Eric from "../Assets/eric-photo.png";
import Ruth from "../Assets/ruth-photo.png";




const Founders = () => {
  const foundersInfoData = [
    {
      image: Eric,
      title: "Eric Maina",
      subtitle: "Chief Financial Officer (CFO)",
      text: "Eric brings extensive experience in sales and accounting to the team. He specializes in business development within the African market.",
    },
    {
      image: Ruth,
      title: "Ruth Zota",
      subtitle: "Chief Technology Officer (CTO)",
      text: "Ruth is a US Army veteran who served for six years in logistics. As a Software Engineer, she specializes in developing user-facing applications.",
    },

  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Team</h1>
      </div>
      <div className="work-section-bottom">
        {foundersInfoData.map((data) => (
          <div className="founders-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <h5>{data.subtitle}</h5>
            <p>{data.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Founders;
