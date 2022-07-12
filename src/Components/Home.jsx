import React, { Component } from "react";
import Wrap from "../Tools/Wrap";
import "../Styles/Home.scss";
function Home() {
  return (
    <React.Fragment>
      <div id="Home" className="Home">
        <h1>
          Hello,✌Saniddhya Here <br />
          Frontend Developer
        </h1>
      </div>
    </React.Fragment>
  );
}
export default Wrap(Home, "/");
