import React, { useState } from "react";
// import styled from "styled-components";
// import { keyframes } from "styled-components";
import "../Styles/Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const i = "</>";
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="Header">
        <div className="div1">
          <p className="titleLogo">Saniddhya99{i}</p>

          <ul className="Navbarlist">
            <li>
              <a href={"#/"}>Home</a>
            </li>
            <li>
              <a href={"#About"}>About</a>
            </li>
            <li>
              <a href={"#Work"}>Work</a>
            </li>
            <li>
              <a href={"#Skills"}>Skill</a>
            </li>
            <li>
              <a href={"#Contact"}>Contact</a>
            </li>
          </ul>
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transiton={{ duration: 0.85, ease: "easeOut" }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className="app__navbar-links">
                  {["About", "Work", "Skills", "Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </header>
      {/* <AnimatedGradientText>
      </AnimatedGradientText> */}
    </>
  );
};
// const gradient = keyframes`
// {
// 0% {
//   background-position: 0 50%;
// }
// 50% {
//   background-position: 100% 50%;
// }
// 100% {
//   background-position: 0 50%;
// }}
// `;
// const AnimatedGradientText = styled.h1`
//   animation: ${gradient} 5s ease-in-out infinite;
//   background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
//   background-size: 300%;
//   background-clip: text;
// `;

export default Navbar;
