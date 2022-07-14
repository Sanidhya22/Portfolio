import React, { Component } from "react";
import { motion } from "framer-motion";
import Wrap from "../Tools/Wrap";
import "../Styles/Home.scss";
function Home() {
  return (
    <React.Fragment>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        id="/"
        className="Home"
      >
        <h1>
          Hello,✌Saniddhya Here <br />
          Frontend Developer
        </h1>
      </motion.div>
    </React.Fragment>
  );
}
export default Wrap(Home, "/");
