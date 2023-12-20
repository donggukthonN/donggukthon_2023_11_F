import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBar from "../../components/common/MenuBar";
import styled from "styled-components";

export const Layout = () => {
  const location = useLocation();
  const showMenu = location.pathname.includes("/mypage");

  return (
    <Root>
      {showMenu && <MenuBar />}
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  //max-height: 749px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  max-width: 400px;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  background-color: #fff6d4;
`;

const Main = styled.main`
  //background-color: #44403c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: #fff6d4;
`;
