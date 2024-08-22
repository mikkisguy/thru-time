import { useState, useEffect, ReactNode, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { ColorStyles, ThemeContext } from "../shared/styles/styled";
import { themes, base } from "../shared/styles/themes";
import React from "react";

export const SiteThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

/**
 * ThemeContextProvider component.
 *
 * This component provides the site theme context to its children components.
 * It also handles the theme state and manages the theme change based on the user's preference or local storage.
 *
 * @param {ThemeContextProviderProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const ThemeContextProvider = (
  props: ThemeContextProviderProps
): React.JSX.Element => {
  // Define the state for the current theme
  const [currentTheme, setCurrentTheme] = useState<ColorStyles>(themes.light);

  /**
   * Initializes the theme state based on the user's preference or local storage.
   */
  useEffect(() => {
    // Retrieve the current theme from local storage
    const storedTheme = JSON.parse(
      localStorage.getItem("current_theme") || "{}"
    );

    // If no theme is stored, set the theme based on the user's preference
    if (Object.keys(storedTheme).length === 0) {
      const themeQuery = window.matchMedia("(prefers-color-scheme: light)");

      setCurrentTheme(themeQuery.matches ? themes.light : themes.dark);

      // Update the theme when the user's preference changes
      themeQuery.addEventListener("change", ({ matches }) => {
        setCurrentTheme(matches ? themes.light : themes.dark);
      });
    } else {
      // Otherwise, set the theme based on the stored value
      setCurrentTheme(JSON.parse(localStorage.getItem("current_theme") ?? ""));
    }
  }, []);

  // Create the theme object by merging the base theme with the current theme colors
  const theme = { ...base, colors: currentTheme };

  // Provide the theme context to the children components
  return (
    <SiteThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {/* Apply the theme to the children components */}
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export default ThemeContextProvider;
