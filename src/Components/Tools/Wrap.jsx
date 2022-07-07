import React, { Component } from "react";
import SocialLinks from "../SocialLinks";
import "../Styles/WrapApp.css";
const Wrap = (WrapperComponent) =>
  function HOC() {
    return (
      <React.Fragment>
        <div className="Wrap">
          <SocialLinks />
          <WrapperComponent />
        </div>
      </React.Fragment>
    );
  };

export default Wrap;
