import styled from "styled-components";
import FrontPageImage from "../../assets/images/frontpage-image.webp";
import { isDarkMode } from "../../shared/utils";

const Home = () => {
  return (
    <main>
      <HomeImage className={`${isDarkMode() && "dark-mode"}`}></HomeImage>
    </main>
  );
};

export default Home;

const HomeImage = styled.div`
  background-image: url("${FrontPageImage}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  border: 3px solid ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 1rem;

  &.dark-mode {
    filter: brightness(0.7);
  }
`;
