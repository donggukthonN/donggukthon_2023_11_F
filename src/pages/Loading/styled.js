import styled from "styled-components";
import { IoIosCopy } from "react-icons/io";

import background from "../../assets/icon/background.svg";

export const StyledLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  padding-top: 100px;
  height: 749px;
  width: 400px;
  background-image: url(${background});
  background-size: cover;
  font-size: 20px;
`;

export const StyledLoadingLoadingText = styled.div`
  font-size: 3.2rem;
  color: #fff;
`;

export const StyledLoadingTitle = styled.div`
  padding: 5px;
  color: #992d2d;
`;

export const StyledLoadingTitleRed = styled.span`
  color: #2d9985;
`;

export const StyledLoadingSubTitle = styled.div`
  padding: 5px;
  font-size: 17px;
  font-family: "YClover-regular";
  //color: #2d9985;
`;

export const StyledLoadingImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
`;

export const StyledLoadingImg = styled.img`
  padding: 5px;
`;
