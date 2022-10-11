import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS } from "./constants";
import cssReset from "./cssReset";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${cssReset}

    body {
        background-color: #47505e;
    }
    
    h1 {
        font-family: ${FONTS.PRIMARY};
        color: ${COLORS.PEACH.DEFAULT};
        text-align: center;
    }
`;

export default GlobalStyle;
