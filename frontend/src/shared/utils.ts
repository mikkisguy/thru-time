import { useContext } from "react";
import { ThemeContext } from "./styles/styled";
import { themes } from "./styles/themes";
import { SiteThemeContext } from "../components/ThemeContextProvider";

export const isDarkMode = () => {
  const { currentTheme } = useContext(SiteThemeContext) as ThemeContext;

  return JSON.stringify(currentTheme) === JSON.stringify(themes.dark);
};
