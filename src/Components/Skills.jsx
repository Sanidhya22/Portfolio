import React, { Component } from "react";
import Wrap from "../Tools/Wrap";
import { skills } from "../Contants/SkillsData";
import "../Styles/Skill.scss";

function Skills() {
  return (
    <>
      <div id="Skills" className="Skills">
        <h1>Skills</h1>
        <div className="Skilldiv">
          {skills.map((j) => {
            return (
              <div className="Skilltitle">
                <div className="Icon">
                  <j.Icon size={50} />
                </div>
                {j.Name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wrap(Skills, "Skills");
