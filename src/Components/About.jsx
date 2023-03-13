import React from "react";
import { motion } from "framer-motion";
import { Education } from "../Contants/Academics";
import img from "../Assets&Images/Myimg.png";
import "../Styles/About.scss";
import Wrap from "../Tools/Wrap";
function About() {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        id="About"
        className="About"
      >
        <h1 className="head-text">
          About<span> Me</span>
        </h1>
        <img src={img} alt=" " />

        <p className="p-text">
          Hello, My Self Saniddhya, I'm a FrontEnd web developer Having
          Knowledge of JavaScript , ReactJs , AngularJS , Gitlab CI/CD , SCSS.{" "}
          <br /> Having own experience of 1.6 year ,Currently working at Epam
          Systems having 1 months of experience .And Previously worked at Wipro
          Limited as a Project Enginner for 6 Months
        </p>
        <div className="Academics">
          <h3>Academics</h3>
          <div className="AcademicsCard">
            {Education.map((i) => {
              return (
                <div key={i.Type} className="card1">
                  <p className="Type0">{i.Type}</p>
                  <p className="Type">{i.Name}</p>
                  <p className="Type2">{i.Year}</p>
                </div>
              );
            })}
          </div>
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Sanidhya22"
          className="link"
        >
          Github
        </a>
      </motion.div>
    </>
  );
}

export default Wrap(About, "About");
