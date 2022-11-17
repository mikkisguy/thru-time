import { useTranslation } from "react-i18next";
import { IS_PREVIEW_SITE, LATEST_COMMIT_SHA } from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import PreviewNotification from "./PreviewNotification";
import Header from "./shared/Header";
import ThemeContextProvider from "./ThemeContextProvider";

const App = () => {
  const { t } = useTranslation();

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {IS_PREVIEW_SITE && LATEST_COMMIT_SHA && <PreviewNotification />}
      <Header />
    </ThemeContextProvider>
  );
};

export default App;
