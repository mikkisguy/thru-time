import { useTranslation } from "react-i18next";
import {
  IS_DEVELOPMENT,
  IS_PREVIEW_SITE,
  LATEST_COMMIT_SHA,
} from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import PreviewNotification from "./PreviewNotification";
import Header from "./shared/Header";
import TemporaryInformation from "./TemporaryInformation";
import ThemeContextProvider from "./ThemeContextProvider";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  const { t } = useTranslation();

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
  display: grid;
  width: 100%;
`;

const SiteContainer = styled.div`
  place-self: center;
  width: 70%;
`;
