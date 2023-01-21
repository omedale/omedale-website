import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Senior Software Engineer",
    compnayName: "Factorial",
    details: `  Factorial human resources (HR) software helps CEOs and HRs streamline employee time tracking,
      time-off management, performance, and more`,
  },
  {
    year: "   2021 - Present",
    position: " Senior Software Engineer",
    compnayName: "Factorial",
    details: `  Factorial human resources (HR) software helps CEOs and HRs streamline employee time tracking,
      time-off management, performance, and more`,
  },
  {
    year: "2018 - 2021",
    position: " Senior Software Engineer",
    compnayName: "Fluxx",
    details: `Fluxx Labs provides a collaborative network for funders and grantees.`,
  },
  {
    year: "Mar 2018 - Jun 2018",
    position: "Software Engineer",
    compnayName: "Grain",
    details: `Grain is an online food company that believes in improving lives 
      through meaningful food experiences`,
  },
  {
    year: "2015 - 2017",
    position: "FREELANCE WEB DEVELOPER",
    compnayName: "System Tonic",
    details: `System Tonic helps organisations and individuals create web applications
      using advanced designs and technologies for modern and awesome people.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
