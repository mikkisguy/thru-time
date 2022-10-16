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
  meta: string;
  metaBold: string;
};

export type ColorStyles = {
  themeIcon: string;
  background: string;
  backgroundSecondary: string;
  heading: string;
  bodyText: string;
  bodyTextSecondary: string;
  highlight: string;
  outline: string;
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
