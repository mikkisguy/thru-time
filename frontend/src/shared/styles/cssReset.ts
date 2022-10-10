import { css } from "styled-components";

const cssReset = css`
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }

    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;

export default cssReset;
