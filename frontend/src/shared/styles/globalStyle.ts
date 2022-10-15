import { createGlobalStyle } from "styled-components";
import cssReset from "./cssReset";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${cssReset}

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export default GlobalStyle;
