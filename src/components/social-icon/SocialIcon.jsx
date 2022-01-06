import React from "react";
import "./social.scss";

const SocialIcon = ({ IconName }) => {
  return (
    <a href="#">
      <img className="social-icon" src={IconName} alt="Social Icon" />
    </a>
  );
};

export default SocialIcon;
