import React, { Component } from "react";
import Wrap from "./Tools/Wrap";
import image from "../Assets&Images/InfiniteScroll.gif";
import "./Styles/Work.scss";
import { Technologies, Projects } from "../Contants/WorkData";
import { useState } from "react";
function Work() {
  const [projects, setprojects] = useState(Projects.JavaScript);
  const selectprojects = (s) => {
    setprojects(Projects[s]);
  };
  // setprojects(Projects.JavaScript);
  // projects.map((item) => console.log(item));
  // console.log(projects)

  return (
    <>
      <div id="Work" className="Work">
        <h1>Work</h1>
        <div className="Techdiv">
          {Technologies.map((j) => {
            return (
              <div
                className="Techtitle"
                onClick={() => {
                  selectprojects(j.Name);
                }}
              >
                {j.Name}
              </div>
            );
          })}
        </div>
        <div className="Projectsdiv">
          {projects.map((i) => {
            return (
              <div className="card1">
                <img src={i.Image}></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wrap(Work, "Work");
