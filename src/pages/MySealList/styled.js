import styled from "styled-components";
import { TbCookieMan } from "react-icons/tb";
import { MdCookie } from "react-icons/md";

export const StyledMySealListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff6d4;
`;

export const StyledMySealListInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  max-width: 400px; // 추후 수정!
`;

export const StyledMySealListCookie1 = styled(TbCookieMan)`
  font-size: 25px;
  color: #992d2d;
`;

export const StyledMySealListCookie2 = styled(MdCookie)`
  font-size: 25px;
  color: #992d2d;
`;

export const StyledMySealListMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  //padding-bottom: 10px;
`;

export const StyledMySealListMenuLeft = styled.button`
  padding: 7px 20px;
  width: 45%;
  border: none;
  border-radius: 10px 0 0 10px;
  border: 1px solid white;
  box-shadow: 1px 2px 1px gray;
  background-color: white;
  font-size: 17px;
  ${(props) =>
    props.$selectedMenu === 0
      ? `color: white;
  background-color: #992d2d;`
      : `background-color: white;`};
`;

export const StyledMySealListMenuRight = styled.button`
  padding: 7px 20px;
  width: 45%;
  border: none;
  border: 1px solid white;
  border-radius: 0 10px 10px 0;
  box-shadow: 1px 2px 1px gray;
  ${(props) =>
    props.$selectedMenu === 1
      ? `color: white;
  background-color: #992d2d;`
      : `background-color: white;`};
  font-size: 17px;
`;
