import React, { Component } from "react";
import { BsSlack } from "react-icons/bs";
import "../Styles/Navigationdots.css";
function Navigatidots({ Title }) {
  return (
    <>
      <div className="Navigationdots">
        {["/", "About", "Skills", "Work", "Contact"].map((i) => (
          <a
            href={`#${i}`}
            style={Title == i ? { backgroundColor: "#A27B5C" } : {}}
            className="dot"
            key={i}
          ></a>
        ))}
      </div>
    </>
  );
}

export default Navigatidots;
