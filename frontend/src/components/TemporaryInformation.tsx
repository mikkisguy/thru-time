import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";
import DarkModeToggle from "./shared/DarkModeToggle";
import LanguageSwitcher from "./shared/LanguageSwitcher";

const TemporaryInformation = () => {
  const { t } = useTranslation();

  return (
    <TemporaryContainer>
      <SiteOptions>
        <DarkModeToggle />
        <LanguageSwitcher />
      </SiteOptions>
      <TemporaryText>
        <Header>
          <h1>{t("temporary.title")}</h1>
        </Header>
        <main>
          <MainText>
            <Trans i18nKey="temporary.main">
              Päivämäärää uuden sivun julkaisulle ei ole mutta voit seurata sen
              kehitystä
              <a href="https://preview.mikkis.fi">esikatselusivulta</a>.
            </Trans>
          </MainText>
          <p>
            <Trans i18nKey="temporary.socials">
              Mikkiksen muita tekemisiä voi seurata
              <a href="https://www.twitch.tv/mikkisguy" target="_blank">
                Twitchissä
              </a>{" "}
              tai
              <a href="https://twitter.com/mikkisguy" target="_blank">
                Twitterissä
              </a>
              .
            </Trans>
          </p>
        </main>
      </TemporaryText>
    </TemporaryContainer>
  );
};

export default TemporaryInformation;

const TemporaryContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const SiteOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TemporaryText = styled.div`
  font: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) =>
    `${theme.spacing.l} ${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xxxl}`};
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.linkText};
    text-decoration-line: underline;
    text-decoration-thickness: 0.05em;
    text-decoration-color: ${({ theme }) => theme.colors.linkUnderline};
    text-underline-offset: 0.3em;

    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

const MainText = styled.p`
  font: ${({ theme }) => theme.fonts.bodyBold};
  padding-bottom: ${({ theme }) => theme.spacing.s};
`;
