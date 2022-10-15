import styled from "styled-components";
import { IS_PREVIEW_SITE, LATEST_COMMIT_SHA } from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import PreviewNotification from "./PreviewNotification";
import ThemeContextProvider from "./ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {IS_PREVIEW_SITE && LATEST_COMMIT_SHA && <PreviewNotification />}
      <StyledH1>Hello world!</StyledH1>
      <StyledP>Lorem ipsum dolor sit amet</StyledP>
    </ThemeContextProvider>
  );
};

export default App;

const StyledH1 = styled.h1`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
`;

const StyledP = styled.p`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  text-align: center;
`;
