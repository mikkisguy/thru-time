import { API_URL, IS_PREVIEW_SITE } from "../shared/constants";

console.log("IS_PREVIEW_SITE:", IS_PREVIEW_SITE);
console.log("API_URL:", API_URL);

const App = () => {
  return (
    <div>
      {IS_PREVIEW_SITE && <p>[preview]</p>}
      <h1>Hello world!</h1>
    </div>
  );
};

export default App;
