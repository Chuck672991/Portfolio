import React, { useState, useEffect } from "react";
import ThemeItem from "./ThemeItem";
import "./Themes.css";
import { themes } from "../Data";

import { WbSunny, NightsStay, WaterDrop } from "@mui/icons-material";

const getStorageColor = () => {
  let color = "hsl(19,96%,52%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };
const Themes = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
   if(theme==="light-theme"){
    setTheme("dark-theme")
   }else{
    setTheme("light-theme");
   }
  };
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);
  useEffect(() => {
    document.documentElement.className=theme;
    localStorage.setItem("theme", theme);

  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher && " show-switcher"} style_switcher`}>
        <div
          className="style_switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <WaterDrop />
        </div>
        <div className="theme_toggler" onClick={toggleTheme}>
          {theme==='light-theme'? <NightsStay />:<WbSunny/>}
        </div>
        <h3 className="style_switcher-title">Style Switcher</h3>
        <div className="style_switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>
        <div
          className="style_switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
