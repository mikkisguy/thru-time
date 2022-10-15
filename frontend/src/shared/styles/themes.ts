import { BaseStyles, Themes } from "./styled";

export const base: BaseStyles = {
  spacing: ["8px", "12px", "16px"],
  fonts: {
    h1: "2rem/2 'Source Code Pro Bold', monospace",
    body: "1rem/1.8 'DM Sans', sans-serif",
    meta: "0.8rem/1.5 'DM Sans', sans-serif",
    metaBold: "0.8rem/1.5 'DM Sans Bold', sans-serif",
  },
};

export const themes: Themes = {
  light: {
    background: "#ebecf0",
    backgroundSecondary: "#fff",
    heading: "#8e6637",
    bodyText: "#0b0c10",
    bodyTextSecondary: "#1f2833",
  },
  dark: {
    background: "#1f2833",
    backgroundSecondary: "#12181e",
    heading: "#d9b08c",
    bodyText: "#b2b2b2",
    bodyTextSecondary: "#7c7c7c",
  },
};

// export const COLORS = {
//   BLACK: { DEFAULT: "#0b0c10", LIGHT: "#1f2833" },
//   WHITE: { DEFAULT: "#ebecf0", DARK: "#9c9c9c" },
//   GRAY: { DEFAULT: "#2c3531", LIGHT: "#c5c6c7" },
//   TURQUOISE: { DEFAULT: "#45a29e", LIGHT: "#66fcf1", DARK: "#116466" },
//   CYAN: { DEFAULT: "#d1e8e2" },
//   PEACH: { DEFAULT: "#ffcb9a", DARK: "#d9b08c" },
// };
