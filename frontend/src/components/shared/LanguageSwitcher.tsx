import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TRANSLATIONS } from "../../shared/constants";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const [isFinnish, setIsFinnish] = useState(i18n.language === TRANSLATIONS.FI);

  return (
    <LanguageButton
      onClick={() => {
        i18n.changeLanguage(isFinnish ? TRANSLATIONS.EN : TRANSLATIONS.FI);
        setIsFinnish(!isFinnish);
      }}
      title={t("changeLanguage")}
    >
      {isFinnish ? "eng" : "fin"}
    </LanguageButton>
  );
};

export default LanguageSwitcher;

const LanguageButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.l}`};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.3rem 0 inset;
  border: none;
  border-radius: 3rem;
  outline: none;
  height: 2rem;

  text-transform: uppercase;
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};

  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.outline}80;
  }
`;
