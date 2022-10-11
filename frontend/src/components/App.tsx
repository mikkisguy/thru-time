import { IS_PREVIEW_SITE, LATEST_COMMIT_SHA } from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";
import PreviewNotification from "./PreviewNotification";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        {IS_PREVIEW_SITE && LATEST_COMMIT_SHA && <PreviewNotification />}
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

export default App;
