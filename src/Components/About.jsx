import React, { Component } from "react";
import { Education } from "../Contants/Academics";
import img from "../Assets&Images/Snapchat-131483175__01.jpg";
import "../Styles/About.scss";
import Wrap from "../Tools/Wrap";
function About() {
  return (
    <>
      <div id="About" className="About">
        <h1 className="head-text">
          About<span> Me</span>
        </h1>
        <img src={img} alt=" " />

        <p className="p-text">
          Hello, My Self Saniddhya, I'm a FrontEnd web developer Having
          Knowledge of JavaScript , Reactjs NodeJs ,HTML , CSS , Bootstrap
          ,MySQL. <br /> Having own experience of 1 year ,Currently working at
          Epam Systems having 5 months of experience
        </p>
        <div className="Academics">
          <h3>Academics</h3>
          <div className="AcademicsCard">
            {Education.map((i) => {
              return (
                <div className="card1">
                  <p className="Type0">{i.Type}</p>
                  <p className="Type">{i.Name}</p>
                  <p className="Type">{i.Year}</p>
                  <p className="Type">{i.Marks}</p>
                </div>
              );
            })}
          </div>
        </div>
        <a
          target="_blank"
          href="https://github.com/Sanidhya22"
          className="link"
        >
          Github
        </a>
      </div>
    </>
  );
}

export default Wrap(About, "About");
