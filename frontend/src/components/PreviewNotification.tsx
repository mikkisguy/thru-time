import { format, parseISO, add } from "date-fns";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  LATEST_COMMIT_SHA,
  TRANSLATIONS,
  UPDATED_ON,
} from "../shared/constants";

/**
 * A functional component that renders a preview notification bar.
 * It displays the title of the preview site, the last updated date, and a link to the commit on Github.
 *
 * @return {React.JSX.Element} The JSX element representing the preview notification bar
 */
const PreviewNotification = () => {
  const { t, i18n } = useTranslation();
  const isFinnish = i18n.language === TRANSLATIONS.FI;

  const getUpdateDate = (): Date => {
    if (UPDATED_ON) {
      // Adding hours because of Github Actions time difference
      return add(parseISO(UPDATED_ON), { hours: 3 });
    }

    return new Date();
  };

  return (
    <PreviewTopBar>
      <PreviewSite>{t("preview.title")}</PreviewSite>
      <span>
        {t("preview.updated")}
        {format(
          getUpdateDate(),
          isFinnish ? " dd.MM.yyyy 'klo' HH:mm:ss" : " PPpp O"
        )}
      </span>
      <CommitLink
        href={`https://github.com/mikkisguy/thru-time${
          LATEST_COMMIT_SHA ? `/commit/${LATEST_COMMIT_SHA}` : ""
        }`}
        target="_blank"
        tabIndex={-1}
      >
        Github &rarr;
      </CommitLink>
    </PreviewTopBar>
  );
};

export default PreviewNotification;

const PreviewTopBar = styled.div`
  font: ${({ theme }) => theme.fonts.meta};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) => `${theme.spacing.l} ${theme.spacing.xxxl}`};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  place-items: center;

  @media only screen and (max-width: 45em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const PreviewSite = styled.span`
  font: ${({ theme }) => theme.fonts.metaBold};
  color: ${({ theme }) => theme.colors.bodyText};
`;

const CommitLink = styled.a`
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  text-decoration: none;

  &:hover,
  &:focus {
    outline: none;
    text-decoration-line: underline;
    text-decoration-style: wavy;
  }

  @media only screen and (max-width: 45em) {
    display: none;
  }
`;
