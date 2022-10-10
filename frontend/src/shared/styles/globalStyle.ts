import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS } from "./constants";
import cssReset from "./cssReset";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${cssReset}

    body {
        background-color: #47505e;
        text-align: center;
        padding-top: 30px;
    }
    p{
        font-family: ${FONTS.SECONDARY};
        color: ${COLORS.TURQUOISE.DEFAULT};
    }
    h1 {
        font-family: ${FONTS.PRIMARY};
        color: ${COLORS.PEACH.DEFAULT};
    }
`;

export default GlobalStyle;
