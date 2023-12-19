import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStye from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import SealDetailPage from "./pages/SealDetail/SealDetailPage";
import SealListPage from "./pages/SealList/SealListPage";
import InvitationPage from "./pages/Invitation/InvitationPage";
import StampResultPage from "./pages/StampResult/StampResultPage";
import StampNamingPage from "./pages/StampNaming/StampNamingPage";
import StampMakingPage from "./pages/StampMaking/StampMakingPage";
import StampDetailPage from "./pages/StampDetail/StampDetailPage";
import MySealListPage from "./pages/MySealList/MySealListPage";
import Example from "./pages/Start/Example";
import NicknamePage from "./pages/Start/NicknamePage";
import MyPage from "./pages/MyPage/MyPage";
import LoadingPage from "./pages/Loading/LoadingPage";
import StampListPage from "./pages/StampList/StampListPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStye />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<NicknamePage />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/mySealList" element={<MySealListPage />} />
        <Route path="/sealList" element={<SealListPage />} />
        <Route path="/sealDetail" element={<SealDetailPage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/stampList" element={<StampListPage />} />
        <Route path="/stampDetail" element={<StampDetailPage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="/stampMaking" element={<StampMakingPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/stampNaming" element={<StampNamingPage />} />
        <Route path="/stampResult" element={<StampResultPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
