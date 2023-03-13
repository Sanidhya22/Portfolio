import React, { useState } from "react";
import { GlobalStyles } from "./global";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

// import Particle from './Particles/Particles';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      {/* <Particle /> */}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Navbar Toggle={toggleTheme} theme={theme} />
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
