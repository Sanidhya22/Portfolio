import React from "react";
import { motion } from "framer-motion";

import Wrap from "../Tools/Wrap";
import { skills } from "../Contants/SkillsData";
import "../Styles/Skill.scss";

function Skills() {
  return (
    <>
      <div id="Skills" className="Skills">
        <h1 className="title">Skills</h1>
        <div className="Skilldiv">
          {skills.map((j) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={j.Name}
                className="Skilltitle"
              >
                <div className="Icon">
                  <j.Icon size={50} />
                </div>
                {j.Name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wrap(Skills, "Skills");
