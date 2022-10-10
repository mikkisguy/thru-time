import { API_URL, IS_PREVIEW_SITE } from "../shared/constants";
import GlobalStyle from "../shared/styles/globalStyle";

console.log("API_URL:", API_URL);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        {IS_PREVIEW_SITE && <p>[preview site]</p>}
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

export default App;
