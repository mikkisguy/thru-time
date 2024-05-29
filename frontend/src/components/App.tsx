import {
  IS_DEVELOPMENT,
  IS_PREVIEW_SITE,
  LATEST_COMMIT_SHA,
} from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import PreviewNotification from "./PreviewNotification";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import TemporaryInformation from "./TemporaryInformation";
import ThemeContextProvider from "./ThemeContextProvider";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {IS_PREVIEW_SITE ? (
        <>
          {LATEST_COMMIT_SHA && !IS_DEVELOPMENT && <PreviewNotification />}

          <SiteOuterContainer>
            <SiteContainer>
              <Header />
              <Outlet />
            </SiteContainer>
            <Footer/>
          </SiteOuterContainer>
        </>
      ) : (
        <TemporaryInformation />
      )}
    </ThemeContextProvider>
  );
};

export default App;

const SiteOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const SiteContainer = styled.div`
  place-self: center;
  width: 60%;
  flex: 1;

  @media only screen and (max-width: ${({ theme }) => theme.bp.wide}) {
    width: 65%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    width: 100%;
  }
`;
