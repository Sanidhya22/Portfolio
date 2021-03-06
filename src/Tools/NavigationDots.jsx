import React from "react";
import "../Styles/Navigationdots.scss";
function Navigatidots({ Title }) {
  return (
    <>
      <div className="Navigationdots">
        {["/", "About", "Work", "Skills", "Contact"].map((i) => (
          <a
            href={`#${i}`}
            style={Title === i ? { backgroundColor: "#00ADB5" } : {}}
            className="dot"
            key={i}
          ></a>
        ))}
      </div>
    </>
  );
}

export default Navigatidots;
