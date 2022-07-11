import React, { Component } from "react";
import Wrap from "./Tools/Wrap";
import image from "../Assets&Images/InfiniteScroll.gif";
import "./Styles/Work.scss";
import { Technologies, Projects } from "../Contants/WorkData";
import { useState } from "react";
function Work() {
  const [Title, setTitle] = useState("JavaScript");
  const [projects, setprojects] = useState(Projects[Title]);

  const selectprojects = (s) => {
    setTitle(s);

    setprojects(Projects[Title]);
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
              <div class="card1">
                <div class="card-header">
                  <img src={i.Image}></img>
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">JavaScript</span>
                  <p>Why is the Tesla Cybertruck designed the way it is?</p>
                  <p>An exploration into the truck's polarising design</p>
                  <a href="" className="link">
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
