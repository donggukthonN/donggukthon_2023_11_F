import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const StyledSealListContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff0e3;
`;

export const StyledSealListInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;
  max-width: 400px; // 추후 수정!
`;

export const StyledSealListSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  //padding-bottom: 10px;
`;

export const StyledSealListSearch = styled.input`
  margin: 0 5px;
  padding: 0 20px;
  width: 70%;
  border: none;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledSealListSearchButton = styled.button`
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
`;

export const StyledSealListSearchButtonImg = styled(FaSearch)`
  width: 15px;
  height: 15px;
  color: white;
`;

export const StyledSealListSealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding-top: 20px;
  border: 2px solid white;
  border-radius: 20px;
  background-color: #f7cd99;
  box-shadow: 1px 2px 1px gray;
`;

export const StyledSealListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  width: 75%;
`;

export const StyledSealListTitle = styled.div``;

export const StyledSealListLikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
