"use client";
import { useState, useEffect } from "react";
import { NightMode } from "./Svg";
import { LightMode } from "./Svg";
import React from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
      console.log(`Loaded saved theme: ${savedTheme}`);
    } else {
      document.documentElement.classList.add("light");
      console.log("Default theme: light");
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
  };

  return (
    <div className="flex space-x-2 md:space-x-4">
      <div
        onClick={() => toggleTheme("light")}
        className={`cursor-pointer ${theme === "light" ? "opacity-100" : "opacity-50"}`}
      >
        <LightMode />
      </div>
      <div
        onClick={() => toggleTheme("dark")}
        className={`cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-50"}`}
      >
        <NightMode />
      </div>
    </div>
  );
};

export default ThemeToggle;
