import { css } from "styled-components";
import SourceCodeProRegular from "../../assets/fonts/SourceCodePro-Regular.woff2";
import SourceCodeProBold from "../../assets/fonts/SourceCodePro-Bold.woff2";
import SourceCodeProBoldItalic from "../../assets/fonts/SourceCodePro-BoldItalic.woff2";
import SourceCodeProItalic from "../../assets/fonts/SourceCodePro-Italic.woff2";
import SourceCodeProLight from "../../assets/fonts/SourceCodePro-Light.woff2";
import SourceCodeProLightItalic from "../../assets/fonts/SourceCodePro-LightItalic.woff2";
import DMSansRegular from "../../assets/fonts/DMSans-Regular.woff2";
import DMSansBold from "../../assets/fonts/DMSans-Bold.woff2";
import DMSansBoldItalic from "../../assets/fonts/DMSans-BoldItalic.woff2";
import DMSansItalic from "../../assets/fonts/DMSans-Italic.woff2";

const fonts = css`
  /*
    Downloaded from Google Fonts
    https://fonts.google.com/

    Converted with Transfonter
    https://transfonter.org/
 */

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProRegular}") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProBold}") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProBoldItalic}") format("woff2");
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProItalic}") format("woff2");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProLight}") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Code Pro";
    src: url("${SourceCodeProLightItalic}") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("${DMSansRegular}") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("${DMSansBold}") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("${DMSansBoldItalic}") format("woff2");
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("${DMSansItalic}") format("woff2");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
`;

export default fonts;
