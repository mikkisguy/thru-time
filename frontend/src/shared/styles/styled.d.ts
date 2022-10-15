import "styled-components";

export type FontStyles = {
  h1: string;
  body: string;
  meta: string;
  metaBold: string;
};

export type ColorStyles = {
  background: string;
  backgroundSecondary: string;
  heading: string;
  bodyText: string;
  bodyTextSecondary: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: string[];
    fonts: FontStyles;
    colors: ColorStyles;
  }
}

export type Themes = {
  light: ColorStyles;
  dark: ColorStyles;
};

export type BaseStyles = {
  spacing: string[];
  fonts: FontStyles;
};

export type ThemeContext = {
  currentTheme: ColorStyles;
  setCurrentTheme: (currentTheme: ColorStyles) => void;
};
