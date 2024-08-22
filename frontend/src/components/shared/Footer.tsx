import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * A functional component that renders the footer of the application.
 *
 * @return {React.JSX.Element} The JSX element representing the footer.
 */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>
        {t("footer.copyright")} &copy; Mikko Larinen {new Date().getFullYear()}
      </p>
      <p>
        <Link to="/login">{t("footer.login")}</Link> -{" "}
        <a href="https://github.com/mikkisguy/thru-time" target="_blank">
          {t("footer.source")}
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.accent}40;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxxl}`};
  text-align: center;
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};

  a {
    font: ${({ theme }) => theme.fonts.meta};
    color: ${({ theme }) => theme.colors.bodyTextSecondary};
    outline: none;
    text-underline-offset: ${({ theme }) => theme.spacing.xs};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.linkText};
      text-decoration-style: wavy;
      text-decoration-thickness: 0.04em;
      text-decoration-color: ${({ theme }) => theme.colors.linkUnderline};
    }
  }

  p:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`;
