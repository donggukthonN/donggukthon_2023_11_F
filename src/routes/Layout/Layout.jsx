import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBar from "../../components/common/MenuBar";
import styled from "styled-components";

export const Layout = () => {
  const location = useLocation();
  const showMenu = location.pathname.includes('/mypage');

  return(
    <Root>
      {showMenu && <MenuBar /> }
      <Container>
        <Main>
          <Outlet/>
        </Main>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  max-height: 749px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

const Main = styled.main`
  background-color: #44403C;
`;
