import React from "react";
import { Platforms } from "../Contants/Sociallinksdata";
import "../Styles/SocialLinks.scss";
function SocialLinks() {
  return (
    <React.Fragment>
      <div className="Sociallinks">
        {Platforms.map((i) => {
          return (
            <a key={i.Link} target="_blank" rel="noreferrer" href={i.Link}>
              <i.icon size={20} />
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default SocialLinks;
