import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// TODO: change links to mine

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/prappleman" target="_blank">
        <BsGithub />
      </a>
      <a href="https://linkedin.com/in/inshasayani" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
