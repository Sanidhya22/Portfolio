import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Wrap from "./Tools/Wrap";
const Navbar = () => {
  const i = "</>";
  return (
    <>
      <AnimatedGradientText>
        <header>
          <div className="div1">
            <p className="titleLogo">Saniddhya99{i}</p>

            <ul className="Navbarlist">
              <li>Home</li>
              <li>About</li>
              <li>Work</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
      </AnimatedGradientText>
    </>
  );
};
const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
`;

export default Navbar;
