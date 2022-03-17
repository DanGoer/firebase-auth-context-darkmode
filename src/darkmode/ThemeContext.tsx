// Context for darkmode

import React, { useContext, useEffect, useState } from "react";
import { BgTheme } from "../ts/interfaces/global_interfaces";

// Function for checking prefered mode

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

// Creates Context

const ThemeContext = React.createContext<React.ReactNode | null>(null);

// Context Provider

const ThemeProvider = ({ children }: BgTheme) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const initTheme = getInitialTheme();
  console.log(initTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark: boolean = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initTheme) {
    rawSetTheme(initTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming Context

const useThemeContext: any = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
