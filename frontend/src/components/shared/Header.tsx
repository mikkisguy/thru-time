import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import DotFiImage from "../../assets/images/dot-fi.webp";
import { useTranslation } from "react-i18next";

/**
 * A functional component that renders the header of the application.
 *
 * @return {React.JSX.Element} The JSX element representing the header.
 */
const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <h1>
        <SiteHeadingLink href="/" aria-label="mikkis.fi">
          mikkis
        </SiteHeadingLink>
      </h1>
      <NavContainer>
        <ul>
          <li>
            <NavLink href="#">{t("nav.home")}</NavLink>
          </li>
          <li>
            <NavLink href="#">{t("nav.blog")}</NavLink>
          </li>
          <li>
            <NavLink href="#">{t("nav.about")}</NavLink>
          </li>
        </ul>
      </NavContainer>
      <SiteOptions>
        <DarkModeToggle />
        <LanguageSwitcher />
      </SiteOptions>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} auto;
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.xxl};
    padding: 0 ${({ theme }) => theme.spacing.xxxl}
      ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xxxl};
  }

  @media only screen and (max-width: ${({ theme }) => theme.bp.small}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SiteHeadingLink = styled.a`
  display: block;
  width: 17.5rem;
  background-image: url("${DotFiImage}");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 20%;
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.heading};
  text-decoration: none;

  &:focus {
    outline: none;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 0.04em;
    text-decoration-color: #885a37;
  }
`;

const NavContainer = styled.nav`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  justify-self: center;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    & li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: ${({ theme }) => theme.spacing.xxxl};
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    order: 3;
    justify-self: start;
  }
`;

const NavLink = styled.a`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  text-decoration: none;
  text-transform: uppercase;
  position: relative;

  &:hover,
  &:focus {
    outline: none;

    &::after {
      width: 100%;
      left: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.1em;
    left: 50%;
    bottom: -0.2em;
    background-color: ${({ theme }) => theme.colors.bodyText};
    transition: all ease-in-out 0.25s;
  }
`;

const SiteOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  justify-self: end;
`;
