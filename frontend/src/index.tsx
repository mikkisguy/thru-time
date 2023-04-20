import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./shared/translations/i18n";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
