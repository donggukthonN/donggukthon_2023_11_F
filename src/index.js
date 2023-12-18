import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import SealDetailPage from "./pages/SealDetail/SealDetailPage";
import SealListPage from "./pages/SealList/SealListPage";
import Example from "./pages/Start/Example";
import GlobalStye from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStye />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/sealList" element={<SealListPage />} />
        <Route path="/sealDetail" element={<SealDetailPage />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
