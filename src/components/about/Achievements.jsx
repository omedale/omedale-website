import React from "react";

const achievementsContent = [
  { title: ((new Date().getFullYear()) - 2017), subTitle1: "years of", subTitle2: "experience" },
  { title: "5", subTitle1: "Prod", subTitle2: "projects" },
  { title: "95", subTitle1: "Customer", subTitle2: "satisfaction", percentage: true },
  { title: "90", subTitle1: "Customer", subTitle2: "retention", percentage: true },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className={`box-stats ${(val.percentage ? "box-percent" : "")} with-margin`}>
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
