import { createGlobalStyle } from "styled-components";
import cssReset from "./cssReset";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${cssReset}

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    h2 {
        font: ${({ theme }) => theme.fonts.h2};
        color: ${({ theme }) => theme.colors.heading};
        margin-top: 0;
        margin-bottom: ${({ theme }) => theme.spacing.xl};
    }
`;

export default GlobalStyle;
