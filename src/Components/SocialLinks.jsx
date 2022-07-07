import React, { Component } from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import "./Styles/SocialLinks.css";
function SocialLinks() {
  return (
    <React.Fragment>
      <div className="Sociallinks">
        <a href="">
          <BsLinkedin />
        </a>
        <a href="">
          <BsTwitter />
        </a>
        <a href="">
          <BsGithub />
        </a>
        <a href="">
          <BsInstagram />
        </a>
      </div>
    </React.Fragment>
  );
}

export default SocialLinks;
