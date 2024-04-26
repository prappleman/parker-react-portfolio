import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/prappleman" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/parker-rappleye/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
