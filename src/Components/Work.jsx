import React from "react";
import Wrap from "../Tools/Wrap";
import "../Styles/Work.scss";
import { motion } from "framer-motion";
import { Technologies, Projects } from "../Contants/WorkData";
import { useState } from "react";

function Work() {
  const [Title, setTitle] = useState("JavaScript");
  const [projects, setprojects] = useState(Projects.JavaScript);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const selectprojects = (s) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setTitle(s);
      setprojects(Projects[s]);
    }, 500);
  };

  return (
    <>
      <div id="Work" className="Work">
        <h1 className="title">Work</h1>

        <div className="Techdiv">
          {Technologies.map((j) => {
            return (
              <div
                key={j.Name}
                className={
                  "Techtitle " + (Title === j.Name ? "Titleactive" : "")
                }
                onClick={() => {
                  selectprojects(j.Name);
                }}
              >
                {j.Name}
              </div>
            );
          })}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="Projectsdiv"
        >
          {projects.map((i, k) => {
            return (
              <div key={k} className="card1">
                <div className="card-header">
                  <img alt="Myphoto" src={i.Image}></img>
                </div>
                <div className="card-body">
                  <span className="tag tag-teal">{Title}</span>
                  <p className="projecttitle">{i.Name}</p>
                  <p className="projectdisc">{i.Disc}</p>{" "}
                </div>
                <a
                  href={i.Link}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Github Link
                </a>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Wrap(Work, "Work");
