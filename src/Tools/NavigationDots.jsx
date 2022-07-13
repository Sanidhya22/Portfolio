import React, { Component } from "react";
import "../Styles/Navigationdots.scss";
function Navigatidots({ Title }) {
  return (
    <>
      <div className="Navigationdots">
        {["/", "About", "Work", "Skills", "Contact"].map((i) => (
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
