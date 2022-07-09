import React, { Component } from "react";
import SocialLinks from "../SocialLinks";
import "../Styles/WrapApp.css";
import Navigatidots from "./NavigationDots";
const Wrap = (WrapperComponent, Title) =>
  function HOC() {
    return (
      <React.Fragment>
        <div className="Wrap">
          <SocialLinks />
          <div className="wrappeddiv">
            <WrapperComponent />
          </div>
          <Navigatidots Title={Title} />
        </div>
      </React.Fragment>
    );
  };

export default Wrap;
