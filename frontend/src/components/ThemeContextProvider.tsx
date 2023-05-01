import { useState, useEffect, ReactNode, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { ColorStyles, ThemeContext } from "../shared/styles/styled";
import { themes, base } from "../shared/styles/themes";

export const SiteThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ColorStyles>(themes.light);

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("current_theme") || "{}"
    );

    if (Object.keys(currentTheme).length === 0) {
      const themeQuery = window.matchMedia("(prefers-color-scheme: light)");

      setCurrentTheme(themeQuery.matches ? themes.light : themes.dark);

      themeQuery.addEventListener("change", ({ matches }) => {
        setCurrentTheme(matches ? themes.light : themes.dark);
      });
    } else {
      setCurrentTheme(JSON.parse(localStorage.getItem("current_theme") ?? ""));
    }
  }, []);

  const theme = { ...base, colors: currentTheme };

  return (
    <SiteThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export default ThemeContextProvider;
