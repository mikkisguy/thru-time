import "styled-components";

type TransitionStyles = {
  linear: string;
};

type SpacingStyles = {
  none: string;
  tiny: string;
  small: string;
  medium: string;
  big: string;
  large: string;
};

type FontStyles = {
  h1: string;
  body: string;
  meta: string;
  metaBold: string;
};

export type ColorStyles = {
  themeToggle: string;
  background: string;
  backgroundSecondary: string;
  heading: string;
  bodyText: string;
  bodyTextSecondary: string;
  highlight: string;
  shadow: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: SpacingStyles;
    transition: TransitionStyles;
    fonts: FontStyles;
    colors: ColorStyles;
  }
}

export type Themes = {
  light: ColorStyles;
  dark: ColorStyles;
};

export type BaseStyles = {
  spacing: SpacingStyles;
  transition: TransitionStyles;
  fonts: FontStyles;
};

export type ThemeContext = {
  currentTheme: ColorStyles;
  setCurrentTheme: (currentTheme: ColorStyles) => void;
};
