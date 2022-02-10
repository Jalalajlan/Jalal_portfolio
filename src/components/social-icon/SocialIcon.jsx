import React from "react";
import "./social.scss";

const SocialIcon = ({ IconName, urlLink }) => {
  return (
    <a href={urlLink}>
      <img className="social-icon" src={IconName} alt="Social Icon" />
    </a>
  );
};

export default SocialIcon;
