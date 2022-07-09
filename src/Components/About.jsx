import React, { Component } from "react";
import Wrap from "./Tools/Wrap";
import img from "../Assets&Images/Snapchat-131483175__01.jpg";
import "./Styles/About.scss";
function About() {
  return (
    <>
      <div id="About" className="About">
        <h2 className="head-text">
          About<span>Me</span>
        </h2>
        <img src={img} alt=" " />
        <h2 className="bold-text">Saniddhya Nigam</h2>
        <p className="p-text">
          Hello, my name is Saniddhya, I'm 23 years old and I'm a web developer
          passionate about frontend, also a lover of designing pages or other
          things and whenever I can I'm willing to learn new technologies.
        </p>
        <a href="https://github.com/Sanidhya22" className="link">
          Github
        </a>
      </div>
    </>
  );
}

export default Wrap(About, "About");
