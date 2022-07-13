import React, { Component } from "react";
import Wrap from "../Tools/Wrap";
import "../Styles/Work.scss";
import { Technologies, Projects } from "../Contants/WorkData";
import { useState } from "react";
function Work() {
  const [Title, setTitle] = useState("JavaScript");
  const [projects, setprojects] = useState(Projects.JavaScript);

  const selectprojects = (s) => {
    setTitle(s);
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
        <div className="Projectsdiv">
          {projects.map((i, k) => {
            return (
              <div key={k} className="card1">
                <div className="card-header">
                  <img src={i.Image}></img>
                </div>
                <div className="card-body">
                  <span className="tag tag-teal">{Title}</span>
                  <p>{i.Name}</p>
                  <p>{i.Disc}</p>
                  <a
                    href="https://github.com/Sanidhya22"
                    target="_blank"
                    className="link"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wrap(Work, "Work");
