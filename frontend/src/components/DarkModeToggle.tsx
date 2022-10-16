import { faCircle, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../shared/styles/styled";
import { themes } from "../shared/styles/themes";
import { SiteThemeContext } from "./ThemeContextProvider";

const DarkModeToggle = () => {
  const { currentTheme, setCurrentTheme } = useContext(
    SiteThemeContext
  ) as ThemeContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const getTheme = () => (e.target.checked ? themes.dark : themes.light);

    setCurrentTheme(getTheme());
    localStorage.setItem("current_theme", JSON.stringify(getTheme()));
  };

  const isDarkMode =
    JSON.stringify(currentTheme) === JSON.stringify(themes.dark);

  return (
    <ToggleForm title="Vaihda teemaa">
      <ToggleCheckbox
        checked={isDarkMode}
        onChange={handleChange}
        type="checkbox"
        id="darkmode-toggle"
        role="switch"
      />
      <ToggleLabel htmlFor="darkmode-toggle">
        <Toggle>
          <ToggleIcon
            icon={isDarkMode ? faMoon : faSun}
            size="2x"
            className={`${isDarkMode && "dark-mode"}`}
          />
          <ToggleButton
            icon={faCircle}
            size="2x"
            className={`${isDarkMode && "dark-mode"}`}
          />
          <LabelText>Tumma teema</LabelText>
        </Toggle>
      </ToggleLabel>
    </ToggleForm>
  );
};

export default DarkModeToggle;

const ToggleForm = styled.form`
  margin-top: ${({ theme }) => theme.spacing.big};
`;

const ToggleCheckbox = styled.input`
  display: none;
`;

const Toggle = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.5em 0 inset;
  border-radius: 3em;
  height: 3.2em;
  margin: 0 auto;
  position: relative;
  transition: background-color 0.25s;
  width: 7em;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
`;

const ToggleIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.themeToggle};
  transition: transform 0.25s;
  padding: 0.3em;
  opacity: 0.5;

  &.dark-mode {
    transform: translate(2em, 0);
  }
`;

const ToggleButton = styled(FontAwesomeIcon)`
  transform: translate(0.3em, 0);
  color: ${({ theme }) => theme.colors.themeToggle};
  transition: transform 0.25s;
  padding: 0.3em;

  &.dark-mode {
    transform: translate(-1.3em, 0);
  }
`;

const LabelText = styled.span`
  display: none;
`;
