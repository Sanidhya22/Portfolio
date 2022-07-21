import React from "react";
import SocialLinks from "./SocialLinks";
import "../Styles/WrapApp.scss";
import Navigatidots from "./NavigationDots";
const Wrap = (WrapperComponent, Title) =>
  function HOC() {
    return (
      <React.Fragment>
        <div className="Wrap">
          <SocialLinks className="Socialink" />
          <div className="wrappeddiv">
            <WrapperComponent />
          </div>
          <Navigatidots className="Navidots" Title={Title} />
        </div>
      </React.Fragment>
    );
  };

export default Wrap;
