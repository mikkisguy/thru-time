import { BaseStyles, Themes } from "./styled";

export const base: BaseStyles = {
  spacing: {
    none: "0",
    xxs: "0.2rem",
    xs: "0.4rem",
    s: "0.6rem",
    l: "0.8rem",
    xl: "1.6rem",
    xxl: "2.4rem",
    xxxl: "3.2rem",
  },
  transition: {
    linear: "all 0.20s linear",
  },
  fonts: {
    h1: "4rem/1 'Source Code Pro Bold', monospace",
    body: "1rem/1.8 'DM Sans', sans-serif",
    bodyBold: "1rem/1.8 'DM Sans Bold', sans-serif",
    bodyItalic: "1rem/1.8 'DM Sans Italic', sans-serif",
    meta: "0.8rem/1.5 'DM Sans', sans-serif",
    metaBold: "0.8rem/1.5 'DM Sans Bold', sans-serif",
  },
};

export const themes: Themes = {
  light: {
    themeIcon: "#e2a54c",
    background: "#ebecf0",
    backgroundSecondary: "#fff",
    backgroundTernary: "#d9d9db",
    heading: "#000",
    bodyText: "#0b0c10",
    bodyTextSecondary: "#1f2833",
    highlight: "#116466",
    outline: "#858585",
    shadow: "#b2b2b2",
  },
  dark: {
    themeIcon: "#858585",
    background: "#1f2833",
    backgroundSecondary: "#12181e",
    backgroundTernary: "#171e26",
    heading: "#d9b08c",
    bodyText: "#b2b2b2",
    bodyTextSecondary: "#858585",
    highlight: "#45a29e",
    outline: "#858585",
    shadow: "#0b0c10",
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
