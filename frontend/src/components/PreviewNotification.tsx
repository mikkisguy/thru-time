import { format, parseISO, add } from "date-fns";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  IS_DEVELOPMENT,
  LATEST_COMMIT_SHA,
  TRANSLATIONS,
  UPDATED_ON,
} from "../shared/constants";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreviewNotification = () => {
  const [isPreviewBarVisible, setPreviewBarVisible] = useState(false);

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
    <PreviewTopBar hide={isPreviewBarVisible}>
      <PreviewSite>{t("preview.title")}</PreviewSite>
      <span>
        {t("preview.updated")}
        {format(
          getUpdateDate(),
          isFinnish ? " dd.MM.yyyy 'klo' HH:mm:ss" : " PPpp O"
        )}
      </span>
      <CommitLink
        href={`https://github.com/mikkisguy/thru-time/commit/${
          LATEST_COMMIT_SHA ? LATEST_COMMIT_SHA : ""
        }`}
        target="_blank"
        tabIndex={-1}
      >
        Github &rarr;
      </CommitLink>

      {IS_DEVELOPMENT && (
        <HideIcon
          icon={faXmark}
          size="2x"
          onClick={() => setPreviewBarVisible(true)}
          title="Hide preview bar"
        />
      )}
    </PreviewTopBar>
  );
};

export default PreviewNotification;

const PreviewTopBar = styled.div<{ hide: boolean }>`
  font: ${({ theme }) => theme.fonts.meta};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) => `${theme.spacing.l} ${theme.spacing.xxxl}`};
  display: ${({ hide }) => (hide ? "none" : "grid")};
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

const HideIcon = styled(FontAwesomeIcon)`
  position: fixed;
  right: ${({ theme }) => theme.spacing.l};
  cursor: pointer;
`;
