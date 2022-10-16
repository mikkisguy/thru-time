import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IS_PREVIEW_SITE, LATEST_COMMIT_SHA } from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import PreviewNotification from "./PreviewNotification";
import ThemeContextProvider from "./ThemeContextProvider";

const App = () => {
  const { t } = useTranslation();

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {IS_PREVIEW_SITE && LATEST_COMMIT_SHA && <PreviewNotification />}
      <Content>
        <SiteOptions>
          <DarkModeToggle />
          <LanguageSwitcher />
        </SiteOptions>
        <StyledH1>{t("greeting")}</StyledH1>
        <StyledP>Lorem ipsum dolor sit amet</StyledP>
      </Content>
    </ThemeContextProvider>
  );
};

export default App;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SiteOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledH1 = styled.h1`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.heading};
  margin-top: ${({ theme }) => theme.spacing.l};
`;

const StyledP = styled.p`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
`;
