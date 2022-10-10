import { createGlobalStyle } from "styled-components";
import cssReset from "./cssReset";

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    background-color: #47505e;
    color: #f2f1a2;
    text-align: center;
    padding-top: 30px;
  }
`;

export default GlobalStyle;
