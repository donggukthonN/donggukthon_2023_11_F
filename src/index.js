import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
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
import NicknamePage from "./pages/Start/NicknamePage";
import MyPage from "./pages/MyPage/MyPage";
import LoadingPage from "./pages/Loading/LoadingPage";
import { Layout } from "./routes/Layout/Layout";
import SealMaking from "./pages/SealMaking/SealMaking";
import StampListPage from "./pages/StampList/StampListPage";
import SealComplete from "./pages/SealMaking/SealComplete";
import SealAdd from "./pages/SealMaking/SealAdd";
import SealForStamp from "./pages/StampList/SealForStamp";
import SealCheck from "./pages/SealMaking/SealCheck";
import OrderPage from "./pages/Order/OrderPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStye />
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signin" element={<NicknamePage />} />
          <Route path="/mypage" element={<Layout />} >
            <Route index path="/mypage" element={<MyPage/>} />
            <Route path="/mypage/sealmaking" element={<SealMaking/>}/>
            <Route path="/mypage/sealadd" element={<SealAdd/>} />
            <Route path="/mypage/stampList" element={<StampListPage />} />
            <Route path="/mypage/sealList" element={<SealListPage />} />
          </Route>

          <Route path="/sealcomplete" element={<SealComplete/>}/>
          <Route path="/sealcheck" element={<SealCheck/>} />
          <Route path="/order" element={<OrderPage/>} />

          <Route path="/mySealList" element={<MySealListPage />} />
          {/* <Route path="/sealList" element={<SealListPage />} /> */}
          <Route path="/sealDetail" element={<SealDetailPage />} />
          {/* <Route path="/stampList" element={<StampListPage />} /> */}
          <Route path="/stampDetail" element={<StampDetailPage />} />
          <Route path="/invitation" element={<InvitationPage />} />
          <Route path="/stampMaking/:id" element={<StampMakingPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/stampNaming" element={<StampNamingPage />} />
          <Route path="/stampResult/:id" element={<StampResultPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
