import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Oluwafemi", hasColor: "" },
  { meta: "last name", metaInfo: "Medale", hasColor: "" },
  { meta: "Nationality", metaInfo: "Nigerian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Lagos, Nigeria", hasColor: "" },
  { meta: "phone", metaInfo: "+2347033390748", hasColor: "" },
  { meta: "Email", metaInfo: "omedale@gmail.com", hasColor: "" },
  // { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
  { meta: "langages", metaInfo: "Yoruba, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
