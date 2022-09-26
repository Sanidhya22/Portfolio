import React from "react";
import { motion } from "framer-motion";
import Wrap from "../Tools/Wrap";
import "../Styles/Home.scss";
import Typewriter from "typewriter-effect";
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
          Saniddhya Nigam ✌ <br />
          <p> Frontend Developer</p>
          <Typewriter
            options={{
              strings: ["Software Engineer ", "Problem Solver"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* <h2 className="typewriter">
            The cat and the hat.
            <spam className="typecurser">|</spam>
          </h2> */}
      </motion.div>
    </React.Fragment>
  );
}
export default Wrap(Home, "/");
