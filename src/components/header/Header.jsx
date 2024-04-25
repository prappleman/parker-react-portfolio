import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Parker Rappleye</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />
          <div>
            <div className="me">
              <img src={Me} alt="image of Parker Rappleye" />
            </div>
          </div>
          <HeaderSocials />
          <a href="#footer" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
