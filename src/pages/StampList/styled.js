import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const StyledStampListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff6d4;
`;

export const StyledStampListInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledStampListSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px 0;
  //padding-bottom: 10px;
`;

export const StyledStampListSearch = styled.input`
  margin: 0 5px;
  padding: 0 20px;
  width: 70%;
  border: none;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledStampListSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: none;
  background-color: #992d2d;
  border-radius: 50%;
  box-shadow: 1px 2px 1px gray;
  color: white;
`;

export const StyledStampListSearchButtonImg = styled(FaSearch)`
  width: 15px;
  height: 15px;
  color: white;
`;

export const StyledStampListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //padding-bottom: 10px;
`;

export const StyledStampListEmptyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
  //padding-bottom: 10px;
`;
