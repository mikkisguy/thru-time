import {
  API_URL,
  IS_PREVIEW_SITE,
  LATEST_COMMIT_SHA,
} from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";

console.log("API_URL:", API_URL);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        {IS_PREVIEW_SITE && LATEST_COMMIT_SHA && (
          <p>
            [
            <a
              href={`https://github.com/mikkisguy/thru-time/commit/${LATEST_COMMIT_SHA}`}
              target="_blank"
            >
              preview site
            </a>
            ]
          </p>
        )}
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

export default App;
