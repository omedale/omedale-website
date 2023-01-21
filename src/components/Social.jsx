import React from "react";

const SocialShare = [
  { iconName: "fa fa-twitter", link: "https://twitter.com/omedaleo1" },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/omedaleo" },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/omedale" }
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
