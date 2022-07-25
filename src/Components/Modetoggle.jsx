import React, { Component } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
function Mode({ Toggle, theme }) {
  return (
    <>
      {theme === "light" ? (
        <MdLightMode onClick={Toggle} size={35} style={{ cursor: "pointer" }} />
      ) : (
        <MdModeNight onClick={Toggle} size={35} style={{ cursor: "pointer" }} />
      )}
    </>
  );
}

export default Mode;
