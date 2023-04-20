import "styled-components";

type TransitionStyles = {
  linear: string;
};

type SpacingStyles = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

type FontStyles = {
  h1: string;
  body: string;
  bodyBold: string;
  bodyItalic: string;
  meta: string;
  metaBold: string;
};

export type ColorStyles = {
  themeIcon: string;
  background: string;
  backgroundSecondary: string;
  backgroundTernary: string;
  heading: string;
  bodyText: string;
  bodyTextSecondary: string;
  highlight: string;
  outline: string;
  shadow: string;
  linkText: string;
  linkUnderline: string;
};

export type Breakpoints = {
  narrow: string;
  mobile: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: SpacingStyles;
    transition: TransitionStyles;
    fonts: FontStyles;
    bp: Breakpoints;
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
  bp: Breakpoints;
};

export type ThemeContext = {
  currentTheme: ColorStyles;
  setCurrentTheme: (currentTheme: ColorStyles) => void;
};
